class Node {
  constructor(state, parent, cost, heuristic) {
    this.state = state;
    this.parent = parent;
    this.cost = cost;
    this.heuristic = heuristic;
  }
}

function astarSearch(startState, goalState) {
  const openSet = [new Node(startState, null, 0, heuristic(startState, goalState))];
  const closedSet = new Set();

  while (openSet.length > 0) {
    // Find the node with the lowest cost + heuristic
    const currentNode = openSet.reduce((a, b) => (a.cost + a.heuristic < b.cost + b.heuristic ? a : b));

    // Goal state reached, construct path
    if (currentNode.state === goalState) {
      const path = [];
      let node = currentNode;
      while (node) {
        path.unshift(node.state);
        node = node.parent;
      }
      return path;
    }

    // Remove current node from open set and add it to closed set
    openSet.splice(openSet.indexOf(currentNode), 1);
    closedSet.add(JSON.stringify(currentNode.state));

    // Generate neighboring states
    const neighbors = generateNeighbors(currentNode.state);

    for (const neighborState of neighbors) {
      const neighborNode = new Node(neighborState, currentNode, currentNode.cost + 1, heuristic(neighborState, goalState));
      const neighborKey = JSON.stringify(neighborState);

      // Skip if the neighbor node is already visited or in the closed set with a lower cost
      if (closedSet.has(neighborKey) || openSet.some(node => node.state === neighborState && node.cost <= neighborNode.cost)) {
        continue;
      }

      // Add neighbor node to open set
      openSet.push(neighborNode);
    }
  }

  // No path found
  return "No path found";
}

// Here are two example helper functions, but you would need to implement these based on your problem domain

function heuristic(state, goalState) {
  // Calculate the heuristic value between two states
  // This is a rough estimation of the remaining cost from the current state to the goal state
  // For example, you can use manhattan distance for a grid-based problem
  // Return a numeric value indicating the cost
}

function generateNeighbors(state) {
  // Generate neighboring states for a given state
  // Implement the logic to generate neighboring states based on your problem domain
  // Return an array of neighboring states
}
