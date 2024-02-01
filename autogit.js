function beamSearch(startState, beamWidth, maxIterations, getSuccessorStates, evaluateState) {
  let beam = [startState];

  for (let i = 0; i < maxIterations; i++) {
    let nextBeam = [];

    for (let s of beam) {
      let successorStates = getSuccessorStates(s);

      for (let nextState of successorStates) {
        let score = evaluateState(nextState);
        let nextStateObj = { state: nextState, score: score, parent: s };
        nextBeam.push(nextStateObj);
      }
    }

    nextBeam.sort((a, b) => b.score - a.score);
    beam = nextBeam.slice(0, beamWidth);

    if (beam.length === 0) {
      break;
    }
  }

  return beam[0].state;
}
