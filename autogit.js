function AStar(startNode, goalNode) {
  const openSet = new FastPriorityQueue((a, b) => a.f < b.f); // Create an empty priority queue
  openSet.add(startNode); // Add start node to the open set

  while (!openSet.isEmpty()) {
    const currentNode = openSet.poll(); // Get the node with the lowest "f" value
    if (currentNode === goalNode) {
      // Path found
      return reconstructPath(currentNode);
    }

    currentNode.closed = true; // Mark the current node as visited

    for (let neighbor of getNeighbors(currentNode)) {
      if (neighbor.closed) {
        continue; // Skip if neighbor node is already visited
      }

      const gScore = currentNode.g + getDistance(currentNode, neighbor);
      let betterPath = false;

      if (!neighbor.visited || gScore < neighbor.g) {
        // This is the first time visiting the neighbor or found a better path
        neighbor.visited = true;
        neighbor.parent = currentNode;
        neighbor.g = gScore;
        neighbor.h = getHeuristic(neighbor, goalNode);
        neighbor.f = neighbor.g + neighbor.h;
        betterPath = true;
      }

      if (!openSet.array.includes(neighbor)) {
        openSet.add(neighbor); // Add neighbor to the open set
      } else if (betterPath) {
        openSet.updateItem(neighbor); // Update neighbor's position in the open set
      }
    }
  }

  // Path not found
  return null;
}

function reconstructPath(node) {
  const path = [node];
  while (node.parent) {
    node = node.parent;
    path.unshift(node);
  }
  return path;
}
