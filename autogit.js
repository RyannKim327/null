function aStarSearch(start, goal, heuristic) {
  let openSet = [start];
  let closedSet = [];

  while (openSet.length > 0) {
    let currentNode = openSet[0];
    let currentIndex = 0;

    // Find the node with the lowest priority
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].priority < currentNode.priority) {
        currentNode = openSet[i];
        currentIndex = i;
      }
    }

    // If the goal is reached, reconstruct and return the path
    if (currentNode.state === goal) {
      let path = [];
      let current = currentNode;
      while (current != null) {
        path.unshift(current);
        current = current.parent;
      }
      return path;
    }

    // Move the current node from open set to closed set
    openSet.splice(currentIndex, 1);
    closedSet.push(currentNode);

    // Expand neighbors
    let neighbors = getNeighbors(currentNode); // Implement this function according to your problem
    for (let neighbor of neighbors) {
      if (closedSet.includes(neighbor)) {
        continue;
      }

      let newCost = currentNode.cost + getDistance(currentNode, neighbor); // Implement this function according to your problem
      if (newCost < neighbor.cost || !openSet.includes(neighbor)) {
        neighbor.cost = newCost;
        neighbor.heuristic = heuristic(neighbor.state, goal);
        neighbor.priority = neighbor.cost + neighbor.heuristic;
        neighbor.parent = currentNode;

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  // If no path is found, return null
  return null;
}
