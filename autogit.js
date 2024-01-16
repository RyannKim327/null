class Node {
  constructor(state, parent, action, g, h) {
    this.state = state;
    this.parent = parent;
    this.action = action;
    this.g = g;
    this.h = h;
  }

  getTotalCost() {
    return this.g + this.h;
  }
}

function aStarSearch(start, goal) {
  const openSet = [];
  const closedSet = new Set();

  const startNode = new Node(start, null, null, 0, heuristic(start, goal));
  openSet.push(startNode);

  while (openSet.length > 0) {
    // TODO: Implement the rest of the algorithm
  }

  return null; // No path found
}

// Heuristic function to estimate the minimum cost from node to goal
function heuristic(node, goal) {
  // TODO: Implement your heuristic function here
}
