function bidirectionalSearch(graph, initialNode, goalNode) {
  // Track visited nodes for both forward and backward search
  const visitedForward = new Set();
  const visitedBackward = new Set();

  // Start the searches from the initial and goal nodes
  const forwardQueue = [{ node: initialNode, path: [] }];
  const backwardQueue = [{ node: goalNode, path: [] }];

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Perform forward search on the graph
    const forwardNodeData = forwardQueue.shift();
    const forwardNode = forwardNodeData.node;
    const forwardPath = forwardNodeData.path;

    visitedForward.add(forwardNode);

    if (visitedBackward.has(forwardNode)) {
      // Nodes meet in the middle, merge paths and return
      const backwardPath = backwardQueue.find(data => data.node === forwardNode).path;
      return forwardPath.concat(backwardPath.reverse());
    }

    for (const neighbor of graph[forwardNode]) {
      if (!visitedForward.has(neighbor)) {
        forwardQueue.push({ node: neighbor, path: [...forwardPath, forwardNode] });
      }
    }

    // Perform backward search on the graph
    const backwardNodeData = backwardQueue.shift();
    const backwardNode = backwardNodeData.node;
    const backwardPath = backwardNodeData.path;

    visitedBackward.add(backwardNode);

    if (visitedForward.has(backwardNode)) {
      // Nodes meet in the middle, merge paths and return
      const forwardPath = forwardQueue.find(data => data.node === backwardNode).path;
      return forwardPath.concat(backwardPath.reverse());
    }

    for (const neighbor of graph[backwardNode]) {
      if (!visitedBackward.has(neighbor)) {
        backwardQueue.push({ node: neighbor, path: [...backwardPath, backwardNode] });
      }
    }
  }

  // No path found
  return null;
}
