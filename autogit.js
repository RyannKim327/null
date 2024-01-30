function depthLimitedSearch(state, depthLimit) {
  // Your code goes here...
}
function DLS(state, depth, depthLimit) {
  // Your code goes here...
}
if (isGoalState(state)) {
  return state;
} else if (depth === depthLimit) {
  return null;
}
var successors = generateSuccessors(state);
for (var i = 0; i < successors.length; i++) {
  var result = DLS(successors[i], depth + 1, depthLimit);
  if (result !== null) {
    return result;
  }
}
return null;
function depthLimitedSearch(state, depthLimit) {
  function DLS(state, depth, depthLimit) {
    if (isGoalState(state)) {
      return state;
    } else if (depth === depthLimit) {
      return null;
    }

    var successors = generateSuccessors(state);

    for (var i = 0; i < successors.length; i++) {
      var result = DLS(successors[i], depth + 1, depthLimit);
      if (result !== null) {
        return result;
      }
    }

    return null;
  }

  return DLS(state, 0, depthLimit);
}

// Helper functions for illustration purposes
function isGoalState(state) {
  // Your goal state check logic here...
}

function generateSuccessors(state) {
  // Your state generation logic here...
}
