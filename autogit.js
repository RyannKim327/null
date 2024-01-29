function breadthLimitedSearch(startNode, goalNode, limit) {
  const queue = [startNode];
  const visited = new Set();
  
  while (queue.length > 0) {
    const currentNode = queue.shift();

    if (currentNode === goalNode) {
      return currentNode; // Goal node found
    }

    visited.add(currentNode);

    if (currentNode.depth < limit) {
      currentNode.neighbors.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      });
    }
  }

  return null; // Goal node not found
}
