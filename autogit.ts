type Beam<T> = {
  sequence: T[];         // partial solution sequence
  score: number;         // cumulative score (e.g., log prob)
};

// Example type for next steps
type NextStep<T> = {
  nextToken: T;
  score: number; // incremental score for this next token
};

/**
 * Beam search algorithm.
 * @param initialSequences Initial partial sequences and scores.
 * @param expandBeam Function to expand a beam into possible next steps.
 * @param beamWidth How many top beams to keep each iteration.
 * @param maxSteps Max length of the sequences.
 */
function beamSearch<T>(
  initialSequences: Beam<T>[],
  expandBeam: (sequence: T[]) => NextStep<T>[],
  beamWidth: number,
  maxSteps: number
): Beam<T>[] {
  let beams = initialSequences;

  for (let step = 0; step < maxSteps; step++) {
    const allCandidates: Beam<T>[] = [];

    for (const beam of beams) {
      const expansions = expandBeam(beam.sequence);
      for (const next of expansions) {
        allCandidates.push({
          sequence: [...beam.sequence, next.nextToken],
          score: beam.score + next.score,
        });
      }
    }

    // Sort candidates by score descending and keep top beamWidth
    allCandidates.sort((a, b) => b.score - a.score);
    beams = allCandidates.slice(0, beamWidth);

    // Optional: stop early if all sequences ended with an end token (if you have one)
  }

  return beams;
}
const initialBeam: Beam<string> = { sequence: [], score: 0 };

const vocab = ['a', 'b', 'c'];

// Dummy expand function that returns possible next chars with some scores
function expand(seq: string[]): NextStep<string>[] {
  return vocab.map((char) => ({
    nextToken: char,
    score: -Math.random(), // negative log-prob (random for example)
  }));
}

const finalBeams = beamSearch<string>(
  [initialBeam],
  expand,
  3,    // beam width
  5     // max steps in sequence
);

console.log(finalBeams);
