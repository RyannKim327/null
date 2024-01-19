function biDirectionalSearch(graph, startNode, goalNode) {
  // Initialize forward search
  let forwardVisited = new Set();
  let forwardQueue = [[startNode]];

  // Initialize backward search
  let backwardVisited = new Set();
  let backwardQueue = [[goalNode]];

  // Perform the search
  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Forward search
    let forwardPath = forwardQueue.shift();
    let forwardNode = forwardPath[forwardPath.length - 1];
    forwardVisited.add(forwardNode);

    // Backward search
    let backwardPath = backwardQueue.shift();
    let backwardNode = backwardPath[backwardPath.length - 1];
    backwardVisited.add(backwardNode);

    // Check for intersection
    if (forwardVisited.has(backwardNode)) {
      let intersectionNode = backwardNode;
      let intersectionPath = backwardPath.reverse().slice(1);

      forwardPath = forwardPath.concat(intersectionPath);

      return forwardPath;
    }

    // Explore neighbors for forward search
    let forwardNeighbors = graph[forwardNode];
    for (let neighbor of forwardNeighbors) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push([...forwardPath, neighbor]);
      }
    }

    // Explore neighbors for backward search
    let backwardNeighbors = graph[backwardNode];
    for (let neighbor of backwardNeighbors) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push([...backwardPath, neighbor]);
      }
    }
  }

  // No path found
  return [];
}
