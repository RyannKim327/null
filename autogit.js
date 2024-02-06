function breadthLimitedSearch(startNode, goalNode, depthLimit) {
  let queue = [startNode];
  let visited = new Set();

  while (queue.length > 0) {
    let currentNode = queue.shift();

    if (currentNode === goalNode) {
      return currentNode;  // Return the path here if needed
    }

    if (currentNode.depth < depthLimit) {
      currentNode.neighbors.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
  }

  return null;  // Goal node not found
}
