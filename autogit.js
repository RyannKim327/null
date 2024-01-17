class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.parent = null;
    this.g = Infinity;
    this.h = 0;
    this.f = Infinity;
  }
  
  calculateHeuristic(goalNode) {
    // Calculate the heuristic value (e.g., Manhattan distance)
    this.h = Math.abs(this.x - goalNode.x) + Math.abs(this.y - goalNode.y);
  }
  
  calculateTotalCost() {
    // Calculate the total cost f = g + h
    this.f = this.g + this.h;
  }
}

function AStarSearch(startNode, goalNode) {
  let openSet = [startNode];
  let closedSet = [];

  startNode.g = 0;
  startNode.calculateHeuristic(goalNode);
  startNode.calculateTotalCost();

  while (openSet.length > 0) {
    let currentNode = openSet[0];

    // Find the node with the lowest f value
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].f < currentNode.f) {
        currentNode = openSet[i];
      }
    }

    if (currentNode === goalNode) {
      // Reconstruct and return the path
      let path = [];
      while (currentNode !== null) {
        path.push(currentNode);
        currentNode = currentNode.parent;
      }
      return path.reverse();
    }

    // Move the current node from open set to closed set
    openSet = openSet.filter(node => node !== currentNode);
    closedSet.push(currentNode);

    // Generate neighbors
    let neighbors = generateNeighbors(currentNode);

    for (let neighbor of neighbors) {
      if (closedSet.includes(neighbor) || neighbor.g <= currentNode.g + 1) {
        // Skip if the neighbor is already evaluated or has higher g value
        continue;
      }

      neighbor.parent = currentNode;
      neighbor.g = currentNode.g + 1;
      neighbor.calculateHeuristic(goalNode);
      neighbor.calculateTotalCost();

      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor);
      }
    }
  }

  return []; // No path found
}

// Helper function to generate neighbors
function generateNeighbors(node) {
  let neighbors = [];
  // Generate neighbors based on your graph structure
  // Example for grid-based graph:
  const offsets = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let offset of offsets) {
    let x = node.x + offset[0];
    let y = node.y + offset[1];
    neighbors.push(new Node(x, y));
  }

  return neighbors;
}

// Example usage:
// Define your start and goal nodes
let startNode = new Node(0, 0);
let goalNode = new Node(5, 5);

// Find the path using A* algorithm
let path = AStarSearch(startNode, goalNode);

console.log(path);
