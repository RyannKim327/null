function bidirectionalSearch(graph, startNode, goalNode) {
  // Step 3: Initialize data structures
  const startQueue = [startNode];
  const goalQueue = [goalNode];
  const startVisited = new Set([startNode]);
  const goalVisited = new Set([goalNode]);

  // Step 5-8: Perform bidirectional search
  while (startQueue.length > 0 && goalQueue.length > 0) {
    // Step 6: Check for meeting point
    const startCurrNode = startQueue.shift();
    if (goalVisited.has(startCurrNode)) {
      return startCurrNode; // Return meeting point or construct path
    }

    const goalCurrNode = goalQueue.shift();
    if (startVisited.has(goalCurrNode)) {
      return goalCurrNode; // Return meeting point or construct path
    }

    // Step 7: Expand nodes and enqueue neighbors
    const startNeighbors = graph[startCurrNode] || [];
    for (const neighbor of startNeighbors) {
      if (!startVisited.has(neighbor)) {
        startQueue.push(neighbor);
        startVisited.add(neighbor);
      }
    }

    const goalNeighbors = graph[goalCurrNode] || [];
    for (const neighbor of goalNeighbors) {
      if (!goalVisited.has(neighbor)) {
        goalQueue.push(neighbor);
        goalVisited.add(neighbor);
      }
    }
  }

  return null; // No path found
}
