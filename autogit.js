function beamSearch(initialState, beamWidth, scoreFunction, generateSuccessors, terminationCondition) {
  let candidates = [initialState];

  while (!terminationCondition()) {
    let successors = [];

    for (let candidate of candidates) {
      let candidateSuccessors = generateSuccessors(candidate);
      successors.push(...candidateSuccessors);
    }

    successors.sort((a, b) => scoreFunction(b) - scoreFunction(a));
    candidates = successors.slice(0, beamWidth);
  }

  return candidates[0]; // Return the best candidate solution found
}
