class Node {
  constructor(x, y, cost, heuristic) {
    this.x = x;
    this.y = y;
    this.cost = cost;
    this.heuristic = heuristic;
    this.totalCost = cost + heuristic;
    this.parent = null;
  }
}
function calculateHeuristic(currentNode, goalNode) {
  // Calculate the Manhattan distance heuristic
  const dx = Math.abs(currentNode.x - goalNode.x);
  const dy = Math.abs(currentNode.y - goalNode.y);
  return dx + dy;
}
function aStarSearch(startNode, goalNode) {
  const openSet = [startNode];
  const closedSet = new Set();

  while (openSet.length > 0) {
    // Find the node with the lowest total cost in the open set
    const currentNode = openSet.reduce((minNode, node) =>
      node.totalCost < minNode.totalCost ? node : minNode
    );

    // Remove the currentNode from the open set
    openSet.splice(openSet.indexOf(currentNode), 1);

    // Mark the currentNode as visited
    closedSet.add(currentNode);

    // Check if the goal has been reached
    if (currentNode === goalNode) {
      return getPath(currentNode);
    }

    // Generate neighboring nodes
    const neighbors = generateNeighbors(currentNode);

    for (const neighbor of neighbors) {
      // Skip neighbor if already visited
      if (closedSet.has(neighbor)) {
        continue;
      }

      // Calculate the cost to reach the neighbor from the start node
      const cost = currentNode.cost + calculateCost(currentNode, neighbor);

      // Check if neighbor is in open set or has a better cost
      const openIndex = openSet.indexOf(neighbor);
      if (openIndex !== -1 && cost >= neighbor.cost) {
        continue;
      }

      // Update neighbor properties
      neighbor.parent = currentNode;
      neighbor.cost = cost;
      neighbor.heuristic = calculateHeuristic(neighbor, goalNode);
      neighbor.totalCost = cost + neighbor.heuristic;

      // Add or update neighbor in the open set
      if (openIndex === -1) {
        openSet.push(neighbor);
      }
    }
  }

  // No path found
  return null;
}
function getPath(node) {
  const path = [node];

  while (node.parent) {
    node = node.parent;
    path.unshift(node);
  }

  return path;
}
const startNode = new Node(0, 0, 0, 0);
const goalNode = new Node(5, 5, 0, 0);

const path = aStarSearch(startNode, goalNode);

console.log(path);
