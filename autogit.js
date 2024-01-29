function beamSearch(initialState, generateCandidates, beamWidth) {
  let beam = [{ state: initialState, score: 0 }];

  while (!terminationCondition) {
    let nextBeam = [];

    for (let candidate of beam) {
      let newCandidates = generateCandidates(candidate.state);

      for (let newCandidate of newCandidates) {
        nextBeam.push({
          state: newCandidate,
          score: computeScore(newCandidate),
        });
      }
    }

    nextBeam.sort((a, b) => b.score - a.score);
    beam = nextBeam.slice(0, beamWidth);
  }

  return beam[0].state;
}

// Example usage
const initialState = /* initial state */;
const generateCandidates = /* candidate generation function */;
const beamWidth = 5;

const bestSolution = beamSearch(initialState, generateCandidates, beamWidth);
console.log(bestSolution);
