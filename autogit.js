function breadthLimitedSearch(startNode, limit) {
  let queue = [startNode];
  let visited = new Set([startNode]);
  let depth = 0;

  while (queue.length > 0 && depth <= limit) {
    let currentNode = queue.shift();

    if (currentNode === goalNode) {
      // Goal node found, return solution or perform action
      return currentNode;
    }

    for (let neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }

    depth++;
  }

  // No solution found within the specified limit
  return null;
}
