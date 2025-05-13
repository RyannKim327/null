type Candidate<T> = {
  state: T;
  score: number;
  history: T[];
};

/**
 * Performs beam search.
 * @param initial The initial state.
 * @param expand A function that takes a candidate's state and returns possible next states with their scores.
 * @param beamWidth Number of candidates to keep at each step.
 * @param isComplete Function to determine if a candidate is complete.
 * @param maxSteps Maximum number of iterations.
 */
function beamSearch<T>(
  initial: T,
  expand: (state: T) => Array<{ nextState: T; score: number }>,
  beamWidth: number,
  isComplete: (state: T) => boolean,
  maxSteps: number = 100
): Candidate<T> | null {
  // Initialize beam with the initial candidate (score 0, empty history)
  let beam: Candidate<T>[] = [{ state: initial, score: 0, history: [initial] }];

  for (let step = 0; step < maxSteps; step++) {
    const allCandidates: Candidate<T>[] = [];

    for (const candidate of beam) {
      if (isComplete(candidate.state)) {
        // Return immediately if found a complete candidate
        return candidate;
      }

      const expansions = expand(candidate.state);

      for (const { nextState, score } of expansions) {
        allCandidates.push({
          state: nextState,
          score: candidate.score + score,
          history: [...candidate.history, nextState],
        });
      }
    }

    if (allCandidates.length === 0) {
      // No expansions possible, end search
      break;
    }

    // Sort all candidates by score descending and pick top beamWidth
    allCandidates.sort((a, b) => b.score - a.score);
    beam = allCandidates.slice(0, beamWidth);
  }

  // Return the best candidate even if incomplete after maxSteps
  if (beam.length === 0) return null;
  return beam.reduce((best, candidate) => (candidate.score > best.score ? candidate : best));
}
const initial = 0;

const expand = (state: number) => {
  return [
    { nextState: state + 1, score: 1 },
    { nextState: state + 2, score: 2 },
  ];
};

const isComplete = (state: number) => state >= 3;

const beamWidth = 2;

const result = beamSearch(initial, expand, beamWidth, isComplete, 10);

console.log(result);
