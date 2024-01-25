function depthLimitedSearch(initialState, depthLimit, otherParams) {
  function recursiveDLS(state, depth, otherParams) {
    if (isGoalState(state)) {
      return state; // Found the solution
    }

    if (depth === 0) {
      return -1; // Reached the depth limit
    }

    let cutoffOccurred = false;
    const successors = generateSuccessors(state);
    for (let i = 0; i < successors.length; i++) {
      const result = recursiveDLS(successors[i], depth - 1, otherParams);
      if (result === -1) {
        cutoffOccurred = true;
      } else if (result !== -1) {
        return result; // Found the solution
      }
    }

    if (cutoffOccurred) {
      return -1; // Cutoff occurred
    } else {
      return -2; // No solution within depth limit
    }
  }

  return recursiveDLS(initialState, depthLimit, otherParams);
}
