function bidirectionalSearch(graph, startNode, goalNode) {
  // Initialize forward and backward search
  let forwardOpenSet = [startNode];
  let backwardOpenSet = [goalNode];
  let forwardClosedSet = new Set();
  let backwardClosedSet = new Set();
  let path = [];

  // Perform bidirectional search
  while (forwardOpenSet.length > 0 && backwardOpenSet.length > 0) {
    // Forward search
    let forwardNext = forwardOpenSet.shift();
    forwardClosedSet.add(forwardNext);

    // Check if the current node exists in the backward search closed set
    if (backwardClosedSet.has(forwardNext)) {
      // Path found
      path = getPath(forwardNext, startNode, goalNode);
      break;
    }

    // Expand the current node in the forward direction
    let forwardNeighbors = graph[forwardNext];
    for (let neighbor of forwardNeighbors) {
      if (!forwardClosedSet.has(neighbor)) {
        forwardOpenSet.push(neighbor);
        forwardClosedSet.add(neighbor);
      }
    }

    // Backward search
    let backwardNext = backwardOpenSet.shift();
    backwardClosedSet.add(backwardNext);

    // Check if the current node exists in the forward search closed set
    if (forwardClosedSet.has(backwardNext)) {
      // Path found
      path = getPath(backwardNext, startNode, goalNode);
      break;
    }

    // Expand the current node in the backward direction
    let backwardNeighbors = graph[backwardNext];
    for (let neighbor of backwardNeighbors) {
      if (!backwardClosedSet.has(neighbor)) {
        backwardOpenSet.push(neighbor);
        backwardClosedSet.add(neighbor);
      }
    }
  }

  return path;
}

function getPath(commonNode, startNode, goalNode) {
  let path = [];
  let current = commonNode;

  // Build path from startNode to commonNode
  while (current !== startNode) {
    path.unshift(current);
    current = current.parent;
  }

  current = commonNode;

  // Build path from commonNode to goalNode
  while (current !== goalNode) {
    path.push(current);
    current = current.parent;
  }

  // Add goalNode to the path
  path.push(goalNode);

  return path;
}
