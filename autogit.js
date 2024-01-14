function beamSearch(startNode, beamWidth, expandNode, evaluationFunction, isGoalNode) {
  let beam = [startNode];
  let currentLevel = 0;

  while (currentLevel < maxLevel) {
    let nextBeam = [];

    for (let node of beam) {
      let childNodes = expandNode(node);
      let sortedChildNodes = childNodes.sort((a, b) => evaluationFunction(b) - evaluationFunction(a));
      nextBeam.push(...sortedChildNodes.slice(0, beamWidth));
    }

    beam = nextBeam;
    currentLevel++;

    if (beam.some(isGoalNode)) {
      return beam.find(isGoalNode);
    }
  }

  return beam.reduce((bestNode, node) => evaluationFunction(node) > evaluationFunction(bestNode) ? node : bestNode);
}
