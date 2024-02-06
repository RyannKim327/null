function beamSearch(initialState, beamWidth, terminationConditions, heuristicFn) {
  let currentCandidates = [initialState];

  while (true) {
    let newCandidates = [];

    for (let candidate of currentCandidates) {
      let successorStates = generateSuccessorStates(candidate);
      let scoredSuccessors = successorStates.map(state => ({ state, score: heuristicFn(state) }));
      scoredSuccessors.sort((a, b) => b.score - a.score); // Sort in descending order

      for (let i = 0; i < beamWidth && i < scoredSuccessors.length; i++) {
        let newCandidate = scoredSuccessors[i].state;
        if (terminationConditions(newCandidate)) {
          return newCandidate; // Found a solution
        } else {
          newCandidates.push(newCandidate);
        }
      }
    }

    currentCandidates = newCandidates;
  }
}

// Example usage:
let initialState = // Define your initial state
let beamWidth = 5;
let terminationConditions = // Define your termination conditions
let heuristicFn = // Define your heuristic function

let bestSolution = beamSearch(initialState, beamWidth, terminationConditions, heuristicFn);
console.log("Best Solution:", bestSolution);
