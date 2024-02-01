function stepSearch(forwardQueue, backwardQueue) {
  if (forwardQueue.length === 0 || backwardQueue.length === 0) {
    return null; // No path exists
  }

  const currentNodeForward = forwardQueue.shift();
  const currentNodeBackward = backwardQueue.shift();

  // Check if the two nodes are the same or connected
  if (currentNodeForward === currentNodeBackward || isConnected(currentNodeForward, currentNodeBackward)) {
    return [currentNodeForward, ...backwardQueue.reverse()]; // Return the path
  }

  // Generate adjacent nodes in the forward direction
  const adjacentNodesForward = generateAdjacentNodes(currentNodeForward);
  for (const node of adjacentNodesForward) {
    if (!visited.has(node)) {
      visited.add(node);
      forwardQueue.push(node);
    }
  }

  // Generate adjacent nodes in the backward direction
  const adjacentNodesBackward = generateAdjacentNodes(currentNodeBackward);
  for (const node of adjacentNodesBackward) {
    if (!visited.has(node)) {
      visited.add(node);
      backwardQueue.push(node);
    }
  }

  return null; // No connection found yet
}

function bidirectionalSearch(startNode, endNode) {
  const forwardQueue = [startNode];
  const backwardQueue = [endNode];
  const visited = new Set([startNode, endNode]);

  while (true) {
    const path = stepSearch(forwardQueue, backwardQueue);
    if (path) {
      return path;
    }
  }
}
