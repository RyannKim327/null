function beamSearch(beamSize, initialState, getNextStates, scoreFunction, terminationCondition) {
  let beam = [initialState];

  while (!terminationCondition()) {
    let nextBeam = [];

    for (let state of beam) {
      let nextStates = getNextStates(state);

      for (let nextState of nextStates) {
        nextState.score = scoreFunction(nextState);
        nextBeam.push(nextState);
      }
    }

    nextBeam.sort((a, b) => b.score - a.score);
    beam = nextBeam.slice(0, beamSize);
  }

  return beam[0];
}
