class Node {
  constructor(state, parent) {
    this.state = state;
    this.parent = parent;
  }
}

function getPathToRoot(node) {
  const path = [];
  let current = node;
  while (current != null) {
    path.unshift(current.state);
    current = current.parent;
  }
  return path;
}

function bidirectionalSearch(startState, goalState, getNextStates) {
  const startQueue = [new Node(startState, null)];
  const goalQueue = [new Node(goalState, null)];
  const startVisited = new Set([startState]);
  const goalVisited = new Set([goalState]);

  while (startQueue.length > 0 && goalQueue.length > 0) {
    const result = expandFrontier(startQueue, startVisited, goalVisited, getNextStates);
    if (result) {
      return result;
    }

    const result2 = expandFrontier(goalQueue, goalVisited, startVisited, getNextStates);
    if (result2) {
      return result2.reverse();
    }
  }

  return null;
}

function expandFrontier(queue, visited, oppositeVisited, getNextStates) {
  const node = queue.shift();
  
  const neighbors = getNextStates(node.state);
  for (const neighbor of neighbors) {
    if (oppositeVisited.has(neighbor)) {
      const reversePath = getPathToRoot(new Node(neighbor, node));
      const forwardPath = getPathToRoot(node);
      return forwardPath.concat(reversePath);
    }

    if (!visited.has(neighbor)) {
      queue.push(new Node(neighbor, node));
      visited.add(neighbor);
    }
  }

  return null;
}

// Example usage
function getNextStates(state) {
  // Implement function to get next possible states from current state
  return [state + 1, state - 1];
}

const startState = 1;
const goalState = 10;
const path = bidirectionalSearch(startState, goalState, getNextStates);

if (path) {
  console.log(`Path found: ${path}`);
} else {
  console.log(`Path not found`);
}
