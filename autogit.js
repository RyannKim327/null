class Node {
  constructor(state, parent, depth) {
    this.state = state;
    this.parent = parent;
    this.depth = depth;
  }
}

function breadthLimitedSearch(startState, isGoalState, getSuccessors, limit) {
  let queue = [new Node(startState, null, 0)];

  while (queue.length > 0) {
    let currentNode = queue.shift();

    if (isGoalState(currentNode.state)) {
      // Goal state found, construct and return the path
      let path = [];
      while (currentNode !== null) {
        path.unshift(currentNode.state);
        currentNode = currentNode.parent;
      }
      return path;
    }

    if (currentNode.depth < limit) {
      let successors = getSuccessors(currentNode.state);
      successors.forEach(successor => {
        queue.push(new Node(successor, currentNode, currentNode.depth + 1));
      });
    }
  }

  return "No solution found within the limit.";
}

// Example usage
let startState = 1;
let goalState = 10;

function isGoalState(state) {
  return state === goalState;
}

function getSuccessors(state) {
  return [state + 1, state + 2];
}

let path = breadthLimitedSearch(startState, isGoalState, getSuccessors, 3);
console.log(path);
