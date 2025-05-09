type Token = string;
type Sequence = { tokens: Token[]; score: number };

// Example next step function signature:
// It takes a sequence and returns possible next tokens with their log-probabilities
type NextStepFn = (sequence: Token[]) => { token: Token; score: number }[];

function beamSearch(
  startSequence: Token[],
  nextStep: NextStepFn,
  beamWidth: number,
  maxSteps: number,
  endToken: Token
): Sequence[] {
  // Initialize beam with the start sequence at score 0 (log-prob = 0)
  let beam: Sequence[] = [{ tokens: startSequence, score: 0 }];

  for (let step = 0; step < maxSteps; step++) {
    const candidates: Sequence[] = [];

    for (const seq of beam) {
      // If the last token is the end token, carry the sequence forward
      if (seq.tokens[seq.tokens.length - 1] === endToken) {
        candidates.push(seq);
        continue;
      }

      // Get next possible tokens with their scores
      const nextTokens = nextStep(seq.tokens);

      for (const next of nextTokens) {
        candidates.push({
          tokens: [...seq.tokens, next.token],
          // Add log-probabilities, because scores are usually additive in log space
          score: seq.score + next.score,
        });
      }
    }

    // Sort candidates by score descending (higher score = better)
    candidates.sort((a, b) => b.score - a.score);

    // Keep top beamWidth candidates only
    beam = candidates.slice(0, beamWidth);

    // Optionally break early if all candidates ended with endToken
    if (beam.every(seq => seq.tokens[seq.tokens.length - 1] === endToken)) {
      break;
    }
  }

  return beam;
}
const vocab = ["a", "b", "c", "<end>"];

// Dummy next step function: just pick randomly for demo purposes
const nextStep: NextStepFn = (sequence) => {
  // For demo: assign random log probabilities to each token
  return vocab.map(token => ({
    token,
    score: Math.log(Math.random()),
  }));
};

const results = beamSearch(["<start>"], nextStep, 3, 5, "<end>");

results.forEach((seq, i) => {
  console.log(`Sequence ${i + 1}: ${seq.tokens.join(" ")} (score: ${seq.score.toFixed(2)})`);
});
