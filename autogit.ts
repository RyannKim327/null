type State = any;  // Customize to your problem
type Candidate = {
  sequence: State[];
  score: number;  // Higher is better
};

// A function that, given a sequence, returns possible next states and their scores.
// For example: (sequence) => [{state: nextState, score: nextScore}, ...]
type ExpandFn = (sequence: State[]) => { state: State; score: number }[];

/**
 * Beam search implementation.
 * @param initialSequence Starting sequence of states.
 * @param beamWidth Number of candidates to keep per step.
 * @param maxSteps How many expansions/steps to perform.
 * @param expandFn Function to generate next states and their scores given a sequence.
 * @returns Array of best sequences found.
 */
function beamSearch(
  initialSequence: State[],
  beamWidth: number,
  maxSteps: number,
  expandFn: ExpandFn
): Candidate[] {
  // Start with the initial candidate
  let beam: Candidate[] = [{ sequence: initialSequence, score: 0 }];

  for (let step = 0; step < maxSteps; step++) {
    const allCandidates: Candidate[] = [];

    for (const candidate of beam) {
      // Generate next step expansions
      const expansions = expandFn(candidate.sequence);
      for (const expansion of expansions) {
        allCandidates.push({
          sequence: [...candidate.sequence, expansion.state],
          score: candidate.score + expansion.score, // cumulative score
        });
      }
    }

    // Sort candidates by descending score and prune to beamWidth
    allCandidates.sort((a, b) => b.score - a.score);
    beam = allCandidates.slice(0, beamWidth);

    if (beam.length === 0) break; // no expansions possible
  }

  return beam;
}
const letters = ['a', 'b', 'c'];

// For demo: expandFn returns next letters with arbitrary scores.
const expandFn: ExpandFn = (sequence) => {
  // Just return all letters with random scores as an example.
  return letters.map((letter) => ({
    state: letter,
    score: Math.random(),
  }));
};

const results = beamSearch([], 3, 5, expandFn);
console.log('Top sequences:', results);
