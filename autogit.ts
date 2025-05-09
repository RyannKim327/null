type Hypothesis<T> = {
  sequence: T[];     // The sequence generated so far
  score: number;     // The score / probability of this sequence
};

// `expandFn` takes the last element of a sequence and returns an array of possible next tokens with scores
// For simplicity, the scores here are log probabilities (higher is better)
async function beamSearch<T>(
  startToken: T,
  beamWidth: number,
  maxSteps: number,
  expandFn: (lastToken: T, sequence: T[]) => Promise<Array<{ token: T; score: number }>>
): Promise<Hypothesis<T>[]> {
  // Initialize the beam with just the start token and a score of 0
  let beam: Hypothesis<T>[] = [{ sequence: [startToken], score: 0 }];

  for (let step = 0; step < maxSteps; step++) {
    const allCandidates: Hypothesis<T>[] = [];

    for (const hypo of beam) {
      const lastToken = hypo.sequence[hypo.sequence.length - 1];
      const expansions = await expandFn(lastToken, hypo.sequence);

      for (const { token, score } of expansions) {
        allCandidates.push({
          sequence: [...hypo.sequence, token],
          // Accumulate scores (assuming log probabilities)
          score: hypo.score + score,
        });
      }
    }

    // Sort all candidates by score descending and keep top `beamWidth`
    allCandidates.sort((a, b) => b.score - a.score);
    beam = allCandidates.slice(0, beamWidth);

    // Optional: Stop early if all hypotheses have reached some end condition
    // e.g., last token is an <end> token or sequence length limit hit
  }

  return beam;
}
async function exampleExpandFn(
  lastToken: number,
  _sequence: number[]
): Promise<{ token: number; score: number }[]> {
  return [
    { token: 1, score: Math.log(0.2) },
    { token: 2, score: Math.log(0.5) },
    { token: 3, score: Math.log(0.3) },
  ];
}

(async () => {
  const results = await beamSearch(0, 2, 3, exampleExpandFn);
  for (const hypo of results) {
    console.log(`Sequence: ${hypo.sequence.join(", ")}; Score: ${hypo.score.toFixed(4)}`);
  }
})();
