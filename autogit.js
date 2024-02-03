function depthLimitedSearch(initialState, depthLimit, otherParams) {
  function recursiveDLS(state, depth) {
    if (state is goal) {
      return solution or true;
    } else if (depth === 0) {
      return cutoff;
    } else {
      var cutoffOccurred = false
      var successors = generateSuccessors(state);
      
      for (var i = 0; i < successors.length; i++) {
        var result = recursiveDLS(successors[i], depth - 1);
        
        if (result === cutoff) {
          cutoffOccurred = true;
        } else if (result !== false) {
          return result;
        }
      }
      
      if (cutoffOccurred) {
        return cutoff;
      } else {
        return false;
      }
    }
  }
  
  return recursiveDLS(initialState, depthLimit);
}
