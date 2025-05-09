type State = string; // Example: a string sequence
type ScoredState = { state: State; score: number };

// Function that, given a state, generates next possible states with their scores
type NextStatesGenerator = (current: State) => ScoredState[];

/**
 * Beam search algorithm
 * @param start Starting state
 * @param generateNext Function to generate next states with scores
 * @param beamWidth Number of sequences to keep at each step
 * @param maxSteps Maximum sequence length (or max iterations)
 * @returns The best sequences found within the beam
 */
function beamSearch(
  start: State,
  generateNext: NextStatesGenerator,
  beamWidth: number,
  maxSteps: number
): ScoredState[] {
  let beam: ScoredState[] = [{ state: start, score: 0 }]; // Initialize beam with start state

  for (let step = 0; step < maxSteps; step++) {
    const allCandidates: ScoredState[] = [];

    // Expand each state in the beam
    for (const candidate of beam) {
      const nextStates = generateNext(candidate.state);

      for (const next of nextStates) {
        // Aggregate scores: here we add scores, but you can choose other ways (e.g., multiply probabilities)
        allCandidates.push({ state: next.state, score: candidate.score + next.score });
      }
    }

    // Sort candidates by score descending (assuming higher is better)
    allCandidates.sort((a, b) => b.score - a.score);

    // Prune to keep the beam width
    beam = allCandidates.slice(0, beamWidth);

    // Optional: stop early if all sequences ended or some condition met
    // For example, if nextStates returns empty list, meaning no expansions possible
    if (beam.length === 0) break;
  }

  return beam;
}
const generateNextExample: NextStatesGenerator = (current) => {
  if (current.length >= 3) return [];
  const chars = ['a', 'b', 'c'];
  return chars.map((ch) => ({ state: current + ch, score: 1 })); // uniform score
};

const results = beamSearch("", generateNextExample, 2, 3);

console.log(results);
// Might output sequences like:
// [{ state: 'aaa', score: 3 }, { state: 'aab', score: 3 }]
