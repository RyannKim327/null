type Candidate<T> = {
  sequence: T[]; // The current sequence of elements
  score: number; // The cumulative score of the sequence
};

function beamSearch<T>(
  start: T[], // Initial sequence
  beamWidth: number, // Number of candidates to keep
  maxSteps: number, // Maximum number of steps to expand
  expandFunction: (sequence: T[]) => T[], // Function to generate next possible elements
  scoreFunction: (sequence: T[]) => number // Function to score a sequence
): T[] {
  // Initialize the beam with the starting sequence
  let beam: Candidate<T>[] = [{ sequence: start, score: scoreFunction(start) }];

  for (let step = 0; step < maxSteps; step++) {
    let nextCandidates: Candidate<T>[] = [];

    // Expand each candidate in the current beam
    for (const { sequence } of beam) {
      const possibleNextElements = expandFunction(sequence);

      for (const nextElement of possibleNextElements) {
        const newSequence = [...sequence, nextElement];
        const newScore = scoreFunction(newSequence);

        nextCandidates.push({ sequence: newSequence, score: newScore });
      }
    }

    // Sort all candidates by score and retain only the top `beamWidth`
    nextCandidates.sort((a, b) => b.score - a.score); // Descending order
    beam = nextCandidates.slice(0, beamWidth);
  }

  // Return the sequence with the highest score
  return beam[0].sequence;
}
// Example: Generate sequences of characters and score them
const expandFunction = (sequence: string[]): string[] => {
  // Possible next characters to add to the sequence
  return ['A', 'B', 'C'];
};

const scoreFunction = (sequence: string[]): number => {
  // Simple scoring: higher score for sequences with more 'A's
  return sequence.filter(char => char === 'A').length;
};

const result = beamSearch<string>(
  [], // Start with an empty sequence
  2, // Beam width
  4, // Maximum steps
  expandFunction,
  scoreFunction
);

console.log("Best sequence:", result);
Best sequence: [ 'A', 'A', 'A', 'A' ]
