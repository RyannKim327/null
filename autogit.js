function breadthLimitedSearch(startNode, searchDepth) {
  // Step 2
  const queue = [];
  const visited = new Set();

  // Step 3
  let depth = 0;

  // Step 4
  queue.push(startNode);

  // Step 5
  while (queue.length > 0 && depth <= searchDepth) {
    // Step 6
    const currentNode = queue.shift();

    // Step 7
    if (currentNode.isGoalNode) {
      return currentNode;
    }

    // Step 8
    visited.add(currentNode);

    // Step 9
    if (currentNode.depth < searchDepth) {
      // Step 10
      depth++;

      // Step 11
      for (const neighbor of currentNode.neighbors) {
        // Step 12
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  // Step 14
  return null;
}
