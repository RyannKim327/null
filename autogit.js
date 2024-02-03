class Node {
  constructor(x, y, cost, heuristic, parent) {
    this.x = x; // x-coordinate of the node
    this.y = y; // y-coordinate of the node
    this.cost = cost; // cost to reach the node from the starting point
    this.heuristic = heuristic; // estimated cost to reach the goal from the node
    this.parent = parent; // reference to the parent node
  }
}
function calculateHeuristic(node, goal) {
  // Calculate the Manhattan distance between the current node and the goal node
  return Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
}
function astarSearch(start, goal, grid) {
  const openSet = []; // Set of nodes to be evaluated
  const closedSet = []; // Set of nodes already evaluated

  // Add the start node to the open set
  openSet.push(start);

  while (openSet.length > 0) {
    // Find the node with the lowest cost + heuristic value
    let currentIndex = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (
        openSet[i].cost + openSet[i].heuristic <
        openSet[currentIndex].cost + openSet[currentIndex].heuristic
      ) {
        currentIndex = i;
      }
    }

    const current = openSet[currentIndex];

    // Check if the current node is the goal node
    if (current === goal) {
      const path = [];
      let temp = current;
      while (temp) {
        path.push(temp);
        temp = temp.parent;
      }
      return path.reverse();
    }

    // Remove the current node from the open set
    openSet.splice(currentIndex, 1);
    // Add the current node to the closed set
    closedSet.push(current);

    // Generate neighbor nodes and evaluate them
    const neighbors = generateNeighbors(current, grid);
    for (const neighbor of neighbors) {
      // Check if the neighbor node has already been evaluated
      if (closedSet.includes(neighbor)) {
        continue;
      }

      // Calculate the cost to reach the neighbor node from the current node
      const costToNeighbor = current.cost + 1;

      // Check if the neighbor node is not in the open set or has a lower cost than before
      if (!openSet.includes(neighbor) || costToNeighbor < neighbor.cost) {
        neighbor.cost = costToNeighbor;
        neighbor.heuristic = calculateHeuristic(neighbor, goal);
        neighbor.parent = current;

        // Add the neighbor node to the open set if it's not already there
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  // Return an empty path if no path is found
  return [];
}
function generateNeighbors(node, grid) {
  const neighbors = [];
  const { x, y } = node;

  // Check the validity of the neighbor nodes (e.g., within grid boundaries)
  if (x > 0 && grid[y][x - 1] !== "obstacle") {
    neighbors.push(new Node(x - 1, y));
  }
  if (x < grid[0].length - 1 && grid[y][x + 1] !== "obstacle") {
    neighbors.push(new Node(x + 1, y));
  }
  if (y > 0 && grid[y - 1][x] !== "obstacle") {
    neighbors.push(new Node(x, y - 1));
  }
  if (y < grid.length - 1 && grid[y + 1][x] !== "obstacle") {
    neighbors.push(new Node(x, y + 1));
  }

  return neighbors;
}
const grid = [
  ["", "", "", "obstacle", ""],
  ["", "obstacle", "", "", ""],
  ["", "obstacle", "", "obstacle", ""],
  ["", "", "", "obstacle", ""],
  ["", "", "", "", ""],
];

const start = new Node(0, 0, 0, 0, null);
const goal = new Node(4, 4, 0, 0, null);

const path = astarSearch(start, goal, grid);

console.log(path); // Output: [start, ..., goal]
