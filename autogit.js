function bidirectionalSearch(graph, start, goal) {
  // Create forward and backward search queues
  const forwardQueue = [start];
  const backwardQueue = [goal];

  // Create forward and backward visited sets
  const forwardVisited = new Set();
  const backwardVisited = new Set();

  // Track parents for path reconstruction
  const forwardParents = new Map();
  const backwardParents = new Map();

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Perform forward search step
    const forwardNode = forwardQueue.shift();
    forwardVisited.add(forwardNode);

    // Check if forward search finds a node in the backward search visited set
    if (backwardVisited.has(forwardNode)) {
      return reconstructPath(forwardNode, forwardParents, backwardParents);
    }

    // Expand forward node and enqueue its neighbors
    const forwardNeighbors = graph.getNeighbors(forwardNode);
    for (const neighbor of forwardNeighbors) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardParents.set(neighbor, forwardNode);
      }
    }

    // Perform backward search step
    const backwardNode = backwardQueue.shift();
    backwardVisited.add(backwardNode);

    // Check if backward search finds a node in the forward search visited set
    if (forwardVisited.has(backwardNode)) {
      return reconstructPath(backwardNode, forwardParents, backwardParents);
    }

    // Expand backward node and enqueue its neighbors
    const backwardNeighbors = graph.getNeighbors(backwardNode);
    for (const neighbor of backwardNeighbors) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardParents.set(neighbor, backwardNode);
      }
    }
  }

  return null; // No path found
}

function reconstructPath(node, forwardParents, backwardParents) {
  const path = [node];

  let currentNode = node;
  while (forwardParents.has(currentNode)) {
    currentNode = forwardParents.get(currentNode);
    path.unshift(currentNode);
  }

  currentNode = node;
  while (backwardParents.has(currentNode)) {
    currentNode = backwardParents.get(currentNode);
    path.push(currentNode);
  }

  return path;
}
