class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.cost = Infinity;
    this.heuristic = 0;
    this.parent = null;
    this.neighbors = [];
  }
}
function calculateCost(node, target) {
  // Calculate the cost to move from the current node to a neighbor
  // For example, you can use Euclidean distance or Manhattan distance

  // Here's an example using Euclidean distance:
  const dx = node.x - target.x;
  const dy = node.y - target.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  return distance;
}

function calculateHeuristic(node, target) {
  // Calculate the estimated cost to reach the goal from the current node
  // You can use the same distance calculation used in the cost function

  // Here's an example using Euclidean distance:
  const dx = target.x - node.x;
  const dy = target.y - node.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  return distance;
}
function aStarSearch(start, goal) {
  const openSet = [start];
  const closedSet = [];

  start.cost = 0;
  start.heuristic = calculateHeuristic(start, goal);

  while (openSet.length > 0) {
    let current = openSet[0];
    let currentIndex = 0;

    // Find the node with the lowest cost
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].cost + openSet[i].heuristic < current.cost + current.heuristic) {
        current = openSet[i];
        currentIndex = i;
      }
    }

    // Move the current node from open to closed set
    openSet.splice(currentIndex, 1);
    closedSet.push(current);

    if (current === goal) {
      // Path found, reconstruct and return it
      const path = [];
      let node = current;
      while (node.parent) {
        path.push(node);
        node = node.parent;
      }
      return path.reverse();
    }

    // Expand the current node's neighbors
    for (let neighbor of current.neighbors) {
      if (closedSet.includes(neighbor)) {
        continue; // Skip already evaluated nodes
      }

      const cost = current.cost + calculateCost(current, neighbor);

      if (cost < neighbor.cost) {
        neighbor.cost = cost;
        neighbor.heuristic = calculateHeuristic(neighbor, goal);
        neighbor.parent = current;

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  // No path found
  return null;
}
