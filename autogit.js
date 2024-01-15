function bidirectionalSearch(graph, start, goal) {
  // Step 3
  let forwardVisited = new Set();
  let backwardVisited = new Set();

  // Step 4
  let forwardQueue = [start];
  let backwardQueue = [goal];

  // Step 5
  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Forward search
    let currentNode = forwardQueue.shift();
    forwardVisited.add(currentNode);

    // Check for goal node in backward visited set
    if (backwardVisited.has(currentNode)) {
      return true; // Path found
    }

    // Enqueue neighbors
    for (let neighbor of graph[currentNode]) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited.add(neighbor);
      }
    }

    // Backward search
    currentNode = backwardQueue.shift();
    backwardVisited.add(currentNode);

    // Check for goal node in forward visited set
    if (forwardVisited.has(currentNode)) {
      return true; // Path found
    }

    // Enqueue neighbors
    for (let neighbor of graph[currentNode]) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardVisited.add(neighbor);
      }
    }
  }

  return false; // No path found
}
