type Hypothesis<T> = {
  sequence: T[];
  score: number; // log-probability or some score where higher is better
};

function beamSearch<T>(
  startState: T[],
  getNextTokens: (sequence: T[]) => Array<{ token: T; score: number }>,
  beamWidth: number,
  maxSteps: number,
  isComplete: (sequence: T[]) => boolean
): Hypothesis<T>[] {
  // Start with initial hypothesis
  let beams: Hypothesis<T>[] = [{ sequence: startState, score: 0 }];

  for (let step = 0; step < maxSteps; step++) {
    let allCandidates: Hypothesis<T>[] = [];

    // Expand each beam
    for (const hypothesis of beams) {
      if (isComplete(hypothesis.sequence)) {
        // Keep completed hypotheses as-is to continue among beams
        allCandidates.push(hypothesis);
        continue;
      }

      // Get next possible expansions
      const nextTokens = getNextTokens(hypothesis.sequence);

      for (const { token, score } of nextTokens) {
        allCandidates.push({
          sequence: [...hypothesis.sequence, token],
          score: hypothesis.score + score, // assuming log probabilities
        });
      }
    }

    // Select top-k hypotheses with highest scores
    beams = allCandidates
      .sort((a, b) => b.score - a.score)
      .slice(0, beamWidth);

    // If all hypotheses are complete, we can stop early
    if (beams.every(hyp => isComplete(hyp.sequence))) {
      break;
    }
  }

  return beams;
}
const start: number[] = [];
const getNextTokens = (seq: number[]) => {
  if (seq.length >= 3) return []; // No expansions after length 3
  return [
    { token: 1, score: -Math.log(0.5) },
    { token: 2, score: -Math.log(0.3) },
    { token: 3, score: -Math.log(0.2) },
  ];
};
const isComplete = (seq: number[]) => seq.length === 3;

const results = beamSearch(start, getNextTokens, 2, 5, isComplete);

console.log('Top hypotheses:', results);
