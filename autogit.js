class Node {
  constructor(x, y, g, h) {
    this.x = x; // current x position
    this.y = y; // current y position
    this.g = g; // cost from start node to current node
    this.h = h; // estimated cost from current node to goal node
    this.f = g + h; // total cost
    this.parent = null; // parent node
  }
}
function aStar(start, goal) {
  const openSet = [start]; // set of nodes to be evaluated
  const closedSet = []; // set of already evaluated nodes

  while (openSet.length > 0) {
    // Find the node with the lowest f score in the open set
    let lowestIndex = 0;
    for (let i = 0; i < openSet.length; i++) {
      if (openSet[i].f < openSet[lowestIndex].f) {
        lowestIndex = i;
      }
    }

    const currentNode = openSet[lowestIndex];

    // Goal node reached, reconstruct and return the path
    if (currentNode === goal) {
      const path = [];
      let current = currentNode;
      while (current) {
        path.push(current);
        current = current.parent;
      }
      return path.reverse();
    }

    // Move the current node from open to closed set
    openSet.splice(lowestIndex, 1);
    closedSet.push(currentNode);

    // Generate neighbors of the current node
    const neighbors = generateNeighbors(currentNode);
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      // Ignore neighbors that have already been evaluated
      if (closedSet.includes(neighbor)) {
        continue;
      }

      // Calculate scores for the neighbor
      const gScore = currentNode.g + 1; // assuming each step costs 1
      const hScore = heuristic(neighbor, goal);
      const fScore = gScore + hScore;

      // Check if the neighbor is already in the open set
      const existingNode = openSet.find(node => node.x === neighbor.x && node.y === neighbor.y);
      if (existingNode) {
        // Update neighbor if it has lower g score
        if (gScore < existingNode.g) {
          existingNode.g = gScore;
          existingNode.f = fScore;
          existingNode.parent = currentNode;
        }
      } else {
        // Add neighbor to the open set
        const newNode = new Node(neighbor.x, neighbor.y, gScore, hScore);
        newNode.parent = currentNode;
        openSet.push(newNode);
      }
    }
  }

  // Open set is empty, no path found
  return null;
}
function generateNeighbors(node) {
  const neighbors = [];

  const dx = [-1, 0, 1, 0]; // relative x coordinates of neighbors
  const dy = [0, 1, 0, -1]; // relative y coordinates of neighbors

  for (let i = 0; i < 4; i++) {
    const newX = node.x + dx[i];
    const newY = node.y + dy[i];

    // Add neighbor only if it is within bounds
    if (isValidPosition(newX, newY)) {
      neighbors.push({ x: newX, y: newY });
    }
  }

  return neighbors;
}

function isValidPosition(x, y) {
  // Implement your own logic to check if position is valid
  // For example, if (x, y) is inside the grid or not blocked by obstacles

  // Return true if the position is valid, false otherwise
  return true;
}

function heuristic(node, goal) {
  // Implement your own heuristic function
  // For example, you can use Manhattan distance or Euclidean distance

  const dx = Math.abs(node.x - goal.x);
  const dy = Math.abs(node.y - goal.y);
  return dx + dy;
}
// Example usage
const start = new Node(0, 0, 0, 0); // initialize start node with appropriate values
const goal = new Node(4, 4, 0, 0); // initialize goal node with appropriate values

const path = aStar(start, goal);
console.log(path); // prints the path from start to goal nodes
