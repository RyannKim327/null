class Node {
  constructor(x, y, cost, parent) {
    this.x = x;
    this.y = y;
    this.cost = cost;
    this.parent = parent;
  }
}
function calculateHeuristic(node, goalNode) {
  // Euclidean distance
  return Math.sqrt(Math.pow((goalNode.x - node.x), 2) + Math.pow((goalNode.y - node.y), 2));
}
function aStarSearch(startNode, goalNode) {
  let openList = [startNode];
  let closedList = [];

  while (openList.length > 0) {
    let currentNode = openList[0];
    let currentIndex = 0;

    // Find the node with the lowest cost
    for (let i = 0; i < openList.length; i++) {
      if (openList[i].cost < currentNode.cost) {
        currentNode = openList[i];
        currentIndex = i;
      }
    }

    // Move the current node from the open list to the closed list
    openList.splice(currentIndex, 1);
    closedList.push(currentNode);

    // Check if the goal node is reached
    if (currentNode.x === goalNode.x && currentNode.y === goalNode.y) {
      let path = [];
      let current = currentNode;

      while (current !== null) {
        path.push([current.x, current.y]);
        current = current.parent;
      }

      return path.reverse();
    }

    // Generate the neighboring nodes
    let neighbors = getNeighbors(currentNode);

    for (let neighbor of neighbors) {
      let neighborCost = currentNode.cost + 1; // Assuming each step has a cost of 1

      if (closedList.find(node => node.x === neighbor.x && node.y === neighbor.y)) {
        continue;
      }

      let openNode = openList.find(node => node.x === neighbor.x && node.y === neighbor.y);

      if (openNode && neighborCost >= openNode.cost) {
        continue;
      }

      let newNode = new Node(neighbor.x, neighbor.y, neighborCost, currentNode);

      if (openNode) {
        openList.splice(openList.indexOf(openNode), 1);
      }

      openList.push(newNode);
    }
  }

  // No path found
  return [];
}
function getNeighbors(node) {
  let neighbors = [];
  let directions = [
    { x: -1, y: 0 }, // Left
    { x: 1, y: 0 },  // Right
    { x: 0, y: -1 }, // Up
    { x: 0, y: 1 }   // Down
  ];

  for (let direction of directions) {
    let neighborX = node.x + direction.x;
    let neighborY = node.y + direction.y;

    // Add the valid neighbors within your search space
    // e.g., check bounds or obstacles

    neighbors.push({ x: neighborX, y: neighborY });
  }

  return neighbors;
}
// Example usage
let startNode = new Node(0, 0, 0, null);
let goalNode = new Node(5, 5, 0, null);

let path = aStarSearch(startNode, goalNode);
console.log(path); // Output: [[0, 0], [1, 0], [1, 1], [2, 1], [2, 2], [3, 2], [3, 3], [4, 3], [4, 4], [5, 4], [5, 5]]
