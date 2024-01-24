class Node {
  constructor(state, parent, cost, heuristic) {
    this.state = state;
    this.parent = parent;
    this.cost = cost;
    this.heuristic = heuristic;
  }
}
function aStarSearch(startState, targetState) {
  // Create an open list to store nodes to be explored
  const openList = [];

  // Create a closed list to store nodes that have already been explored
  const closedList = new Set();

  // Create the start node
  const startNode = new Node(startState, null, 0, heuristic(startState, targetState));

  // Add the start node to the open list
  openList.push(startNode);

  while (openList.length > 0) {
    // Sort the open list by the sum of cost and heuristic
    openList.sort((a, b) => (a.cost + a.heuristic) - (b.cost + b.heuristic));

    // Get the node with the lowest cost from the open list
    const currentNode = openList.shift();

    // Check if the current node is the goal
    if (currentNode.state === targetState) {
      return reconstructPath(currentNode);
    }

    // Add the current node to the closed list
    closedList.add(currentNode.state);

    // Generate the neighbors of the current node
    const neighbors = generateNeighbors(currentNode);

    for (const neighbor of neighbors) {
      // Skip if the neighbor is already in the closed list
      if (closedList.has(neighbor.state)) {
        continue;
      }

      // Calculate the new cost to reach the neighbor
      const newCost = currentNode.cost + neighbor.cost;

      // Check if the neighbor is already in the open list
      const existingNodeIndex = openList.findIndex((n) => n.state === neighbor.state);

      if (existingNodeIndex !== -1) {
        // Update the cost of the neighbor if the new cost is lower
        if (newCost < openList[existingNodeIndex].cost) {
          openList[existingNodeIndex].cost = newCost;
          openList[existingNodeIndex].parent = currentNode;
        }
      } else {
        const newNode = new Node(
          neighbor.state,
          currentNode,
          newCost,
          heuristic(neighbor.state, targetState)
        );
        // Add the neighbor to the open list
        openList.push(newNode);
      }
    }
  }

  // No path found
  return null;
}
function heuristic(state, targetState) {
  // You need to define your own heuristic based on the problem domain
  // The heuristic should be admissible (never overestimate the actual cost) for A* to work correctly
  // Example: Manhattan distance heuristic for a grid problem
  const x1 = state.x;
  const y1 = state.y;
  const x2 = targetState.x;
  const y2 = targetState.y;

  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
function generateNeighbors(node) {
  // You need to define your own way of generating neighbors based on the problem domain
  // Example: Generate all possible moves in a grid problem

  const neighbors = [];
  
  // Generate the four possible moves: up, down, left, right
  const moves = [
    { x: -1, y: 0 }, // left
    { x: 1, y: 0 },  // right
    { x: 0, y: -1 }, // up
    { x: 0, y: 1 }   // down
  ];

  for (const move of moves) {
    const newState = { x: node.state.x + move.x, y: node.state.y + move.y };
    const newCost = /* calculate the cost to reach the new state */;

    neighbors.push(new Node(newState, null, newCost, 0));
  }

  return neighbors;
}
function reconstructPath(node) {
  const path = [];

  let current = node;
  while (current !== null) {
    path.unshift(current.state);
    current = current.parent;
  }

  return path;
}
