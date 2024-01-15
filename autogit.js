class Node {
  constructor(position, parent = null, gScore = 0, hScore = 0) {
    this.position = position;
    this.parent = parent;
    this.gScore = gScore;
    this.hScore = hScore;
  }
}
function heuristic(node, goal) {
  const dx = Math.abs(node.position.x - goal.position.x);
  const dy = Math.abs(node.position.y - goal.position.y);
  return dx + dy; // Manhattan distance heuristic
}
function aStarSearch(start, goal) {
  const openSet = [start];
  const closedSet = new Set();

  while (openSet.length > 0) {
    // Find the node with the lowest f-score in the open set
    let currentNode = openSet[0];
    let currentIndex = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].gScore + openSet[i].hScore < currentNode.gScore + currentNode.hScore) {
        currentNode = openSet[i];
        currentIndex = i;
      }
    }

    // Move the current node from open set to closed set
    openSet.splice(currentIndex, 1);
    closedSet.add(currentNode);

    // Check if the goal node is reached
    if (currentNode === goal) {
      const path = [];
      let current = currentNode;
      while (current) {
        path.push(current.position);
        current = current.parent;
      }
      return path.reverse();
    }

    // Generate neighboring nodes
    const neighbors = getNeighbors(currentNode);

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      // Skip if the neighbor is in the closed set or not traversable
      if (closedSet.has(neighbor) || !isTraversable(neighbor)) {
        continue;
      }

      // Calculate tentative g-score for the neighbor
      const tentativeGScore = currentNode.gScore + 1;

      // Add neighbor to the open set if it's not already there
      if (!openSet.includes(neighbor)) {
        openSet.push(neighbor);
      } else if (tentativeGScore >= neighbor.gScore) {
        // Skip if the tentative g-score is higher than existing g-score
        continue;
      }

      // Update neighbor's parent and g-score
      neighbor.parent = currentNode;
      neighbor.gScore = tentativeGScore;
      neighbor.hScore = heuristic(neighbor, goal);
    }
  }

  // No path found
  return null;
}
