// Define a candidate type for readability
type Candidate<T> = {
  sequence: T[];  // The partial solution sequence
  score: number;  // The score of this candidate (higher is better)
};

// An example function type to expand a candidate to next possibilities
type ExpandFunc<T> = (sequence: T[]) => Array<{ next: T; score: number }>;

/**
 * Beam Search function
 * @param initialCandidates - initial candidates to start with (often a single start)
 * @param expand - function to expand a candidate sequence to next states with scores
 * @param beamWidth - the size of the beam to keep at each step
 * @param maxSteps - maximum length of sequences to generate
 */
function beamSearch<T>(
  initialCandidates: Candidate<T>[],
  expand: ExpandFunc<T>,
  beamWidth: number,
  maxSteps: number
): Candidate<T>[] {
  let beam = initialCandidates;

  for (let step = 0; step < maxSteps; step++) {
    let allCandidates: Candidate<T>[] = [];

    for (const candidate of beam) {
      const expansions = expand(candidate.sequence);
      for (const { next, score } of expansions) {
        allCandidates.push({
          sequence: [...candidate.sequence, next],
          score: candidate.score + score, // aggregate score, customize as needed
        });
      }
    }

    // Sort candidates by score descending and keep top beamWidth
    allCandidates.sort((a, b) => b.score - a.score);
    beam = allCandidates.slice(0, beamWidth);

    // Optional: stopping criteria if all candidates end early
    if (beam.length === 0) break;
  }

  return beam;
}
// A function that expands sequences by adding letters, with some dummy scores
const expandLetters: ExpandFunc<string> = (sequence) => {
  const letters = ['a', 'b', 'c'];
  return letters.map((letter) => ({
    next: letter,
    score: Math.random(), // Just a random score for demo; replace with your logic
  }));
};

// Start with empty sequence with score 0
const initialCandidates: Candidate<string>[] = [{ sequence: [], score: 0 }];

const results = beamSearch(initialCandidates, expandLetters, 3, 5);

for (const res of results) {
  console.log(`Sequence: ${res.sequence.join('')} - Score: ${res.score.toFixed(3)}`);
}
