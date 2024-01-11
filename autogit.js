class Node {
  constructor(position, parent = null, g = 0, h = 0) {
    this.position = position;
    this.parent = parent;
    this.g = g; // the cost to reach this node from the start node
    this.h = h; // the estimated heuristic cost from this node to the goal node
  }

  // Calculate the total cost f = g + h
  get f() {
    return this.g + this.h;
  }
}
function astarSearch(start, goal, heuristic) {
  // Create open and closed sets
  const openSet = [new Node(start)];
  const closedSet = [];

  // Loop until the open set becomes empty
  while (openSet.length > 0) {
    // Get the node with the lowest f value from the open set
    const currentNode = openSet.reduce((minNode, node) => (node.f < minNode.f ? node : minNode));

    // Move the current node from the open set to the closed set
    openSet.splice(openSet.indexOf(currentNode), 1);
    closedSet.push(currentNode);

    // Check if the current node is the goal node
    if (currentNode.position === goal) {
      // Goal reached, construct the path and return it
      const path = [];
      let node = currentNode;
      while (node) {
        path.unshift(node.position);
        node = node.parent;
      }
      return path;
    }

    // Generate neighboring nodes
    const neighbors = getNeighbors(currentNode.position);

    // Evaluate each neighbor
    neighbors.forEach((neighborPos) => {
      // Create a new node for the neighbor
      const neighborNode = new Node(neighborPos, currentNode);

      // Check if the neighbor is already in the closed set
      if (closedSet.some((node) => node.position === neighborNode.position)) {
        return; // Ignore this neighbor, it's already evaluated
      }

      // Calculate g and h values for the neighbor
      neighborNode.g = currentNode.g + 1; // Assuming the cost to move between neighbors is 1
      neighborNode.h = heuristic(neighborPos, goal);

      // Check if the neighbor is already in the open set
      const existingNode = openSet.find((node) => node.position === neighborNode.position);
      if (existingNode) {
        // Check if this path to the neighbor is better than the previous one
        if (neighborNode.g < existingNode.g) {
          existingNode.g = neighborNode.g;
          existingNode.parent = currentNode;
        }
      } else {
        // Add the neighbor to the open set
        openSet.push(neighborNode);
      }
    });
  }

  // Open set is empty, and goal was not reached
  return null;
}
// Example usage
const start = [0, 0];
const goal = [4, 4];

// A simple Manhattan distance heuristic
function heuristic(position, goal) {
  const dx = Math.abs(position[0] - goal[0]);
  const dy = Math.abs(position[1] - goal[1]);
  return dx + dy;
}

const path = astarSearch(start, goal, heuristic);
console.log(path);
