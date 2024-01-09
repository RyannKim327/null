// The Node class represents a node in the search grid
class Node {
  constructor(x, y, isWall) {
    this.x = x; // x-coordinate
    this.y = y; // y-coordinate
    this.isWall = isWall; // whether this node is a wall or not
    this.g = Infinity; // cost from start node to this node
    this.h = 0; // heuristic cost from this node to the goal node
    this.f = Infinity; // estimated total cost (g + h)
    this.parent = null; // previous node in the path
  }
}

// A* search algorithm
function aStarSearch(grid, startNode, goalNode) {
  // Set of nodes to be evaluated
  let openSet = new Set();

  // Set of nodes already evaluated
  let closedSet = new Set();

  // Add the start node to the open set
  openSet.add(startNode);

  // Set the cost from start node to itself as 0
  startNode.g = 0;

  // Calculate the heuristic cost from start node to goal node
  startNode.h = heuristic(startNode, goalNode);

  // Calculate the total cost from start node to goal node through this node
  startNode.f = startNode.g + startNode.h;

  while (openSet.size > 0) {
    // Find the node with the lowest total cost (f score) in the open set
    let currentNode = findNodeWithLowestFScore(openSet);

    // Goal reached, reconstruct the path and return it
    if (currentNode === goalNode) {
      return reconstructPath(currentNode);
    }

    // Remove the current node from the open set
    openSet.delete(currentNode);

    // Add the current node to the closed set
    closedSet.add(currentNode);

    // Get the neighbors of the current node
    let neighbors = getNeighbors(currentNode, grid);

    for (let neighbor of neighbors) {
      // Skip if the neighbor is already evaluated or is a wall
      if (closedSet.has(neighbor) || neighbor.isWall) {
        continue;
      }

      // Calculate the tentative cost from the start node to the neighbor
      let tentativeG = currentNode.g + 1;

      // Update the neighbor if it is not in the open set or the new cost is lower
      if (!openSet.has(neighbor) || tentativeG < neighbor.g) {
        // Set the cost from start node to the neighbor
        neighbor.g = tentativeG;

        // Calculate the heuristic cost from the neighbor to the goal node
        neighbor.h = heuristic(neighbor, goalNode);

        // Calculate the total cost from start node to goal node through the neighbor
        neighbor.f = neighbor.g + neighbor.h;

        // Set the parent of the neighbor to the current node
        neighbor.parent = currentNode;

        // Add the neighbor to the open set
        openSet.add(neighbor);
      }
    }
  }

  // No path found
  return null;
}

// Heuristic function (Euclidean distance)
function heuristic(nodeA, nodeB) {
  let dx = nodeB.x - nodeA.x;
  let dy = nodeB.y - nodeA.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Find the node with the lowest total cost (f score) in the set
function findNodeWithLowestFScore(nodes) {
  let lowestFScore = Infinity;
  let lowestNode = null;

  for (let node of nodes) {
    if (node.f < lowestFScore) {
      lowestFScore = node.f;
      lowestNode = node;
    }
  }

  return lowestNode;
}

// Reconstruct the path from the goal node to the start node
function reconstructPath(node) {
  let path = [];
  let currentNode = node;

  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = currentNode.parent;
  }

  return path;
}

// Get the neighboring nodes of a given node in the grid
function getNeighbors(node, grid) {
  let neighbors = [];
  let x = node.x;
  let y = node.y;

  // Check top, right, bottom, and left neighbors
  if (x > 0) neighbors.push(grid[x - 1][y]);
  if (y < grid[0].length - 1) neighbors.push(grid[x][y + 1]);
  if (x < grid.length - 1) neighbors.push(grid[x + 1][y]);
  if (y > 0) neighbors.push(grid[x][y - 1]);

  return neighbors;
}

// Example usage
let grid = [
  [new Node(0, 0, false), new Node(0, 1, false), new Node(0, 2, false)],
  [new Node(1, 0, false), new Node(1, 1, true), new Node(1, 2, false)],
  [new Node(2, 0, false), new Node(2, 1, false), new Node(2, 2, false)]
];

let startNode = grid[0][0];
let goalNode = grid[2][2];

let path = aStarSearch(grid, startNode, goalNode);

if (path !== null) {
  console.log("Shortest path found!");
  for (let node of path) {
    console.log(`(${node.x}, ${node.y})`);
  }
} else {
  console.log("No path found!");
}
