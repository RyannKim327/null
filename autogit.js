function depthLimitedSearch(currentState, depthLimit) {
  if (isGoalState(currentState)) {
    return currentState;
  }

  if (depthLimit === 0) {
    return null;
  }

  var children = generateChildren(currentState);

  for (var i = 0; i < children.length; i++) {
    var result = depthLimitedSearch(children[i], depthLimit - 1);
    if (result !== null) {
      return result;
    }
  }

  return null;
}
