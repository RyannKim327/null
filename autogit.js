class Node {
  constructor(state, parent, action, g, h) {
    this.state = state;
    this.parent = parent;
    this.action = action;
    this.g = g;
    this.h = h;
    this.f = g + h;
  }
}

function aStarSearch(startNode, goalNode, heuristicFunction) {
  const openSet = [startNode];
  const closedSet = new Set();

  while (openSet.length > 0) {
    const currentNode = openSet.sort((a, b) => a.f - b.f).shift();

    if (currentNode.state === goalNode.state) {
      return currentNode;
    }

    closedSet.add(currentNode);

    const successors = generateSuccessors(currentNode);

    for (const successor of successors) {
      if (closedSet.has(successor)) {
        continue;
      }

      const g = currentNode.g + 1; // assuming a uniform cost of movement
      const h = heuristicFunction(successor.state);
      const f = g + h;

      const existingNodeIndex = openSet.findIndex((node) => node.state === successor.state);

      if (existingNodeIndex !== -1 && openSet[existingNodeIndex].f <= f) {
        continue;
      }

      openSet.splice(existingNodeIndex, 1);
      openSet.push(new Node(successor.state, currentNode, successor.action, g, h));
    }
  }

  return null;
}

// Example usage:

// Define a heuristic function. This estimates the cost from a given state
// to the goal state. It must always be an underestimation (admissible).
function heuristicFunction(state) {
  // ... implement the heuristic function based on your problem ...
  return 0;
}

// Initialize the start and goal nodes
const startNode = new Node(startState, null, null, 0, heuristicFunction(startState));
const goalNode = new Node(goalState, null, null, 0, 0);

// Call the A* search algorithm
const result = aStarSearch(startNode, goalNode, heuristicFunction);

// If result is not null, construct the path by traversing the parent nodes
if (result) {
  let node = result;
  const path = [];

  while (node !== null) {
    path.push(node);
    node = node.parent;
  }

  // Reverse the path to get it in the correct order
  path.reverse();

  console.log("Path found:", path);
} else {
  console.log("Path not found.");
}
