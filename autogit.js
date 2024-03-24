// Define the Node class
class Node {
  constructor(x, y, parent) {
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.g = 0; // Cost from start node to current node
    this.h = 0; // Heuristic value (estimated cost from current node to goal node)
    this.f = 0; // f = g + h
  }

  // Calculate the heuristic value (Euclidean distance)
  calculateHeuristic(goal) {
    this.h = Math.sqrt(Math.pow(this.x - goal.x, 2) + Math.pow(this.y - goal.y, 2));
  }
}

// A* search algorithm
function aStarSearch(start, goal, grid) {
  let openSet = [start];
  let closedSet = [];

  while (openSet.length > 0) {
    // Find node with lowest f value in openSet
    let currentNode = openSet.reduce((acc, node) => node.f < acc.f ? node : acc, openSet[0]);

    // Move current node from openSet to closedSet
    openSet = openSet.filter(node => node !== currentNode);
    closedSet.push(currentNode);

    // Check if current node is the goal node
    if (currentNode.x === goal.x && currentNode.y === goal.y) {
      let path = [];
      while (currentNode != null) {
        path.push({ x: currentNode.x, y: currentNode.y });
        currentNode = currentNode.parent;
      }
      return path.reverse();
    }

    // Generate neighbors of current node
    let neighbors = [];
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if ((i !== 0 || j !== 0) && currentNode.x + i >= 0 && currentNode.x + i < grid.length &&
            currentNode.y + j >= 0 && currentNode.y + j < grid[0].length &&
            grid[currentNode.x + i][currentNode.y + j] !== 1) {
          neighbors.push(new Node(currentNode.x + i, currentNode.y + j, currentNode));
        }
      }
    }

    // Update g, h, and f values for each neighbor
    neighbors.forEach(neighbor => {
      if (!closedSet.includes(neighbor)) {
        let tempG = currentNode.g + 1; // Assuming the cost is 1 to move to a neighboring cell
        if (!openSet.includes(neighbor) || tempG < neighbor.g) {
          neighbor.g = tempG;
          neighbor.calculateHeuristic(goal);
          neighbor.f = neighbor.g + neighbor.h;
          if (!openSet.includes(neighbor)) {
            openSet.push(neighbor);
          }
        }
      }
    });
  }

  return null; // No path found
}

// Example usage
let grid = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0]
];

let start = new Node(0, 0, null);
let goal = new Node(4, 4, null);

let path = aStarSearch(start, goal, grid);
console.log(path);
