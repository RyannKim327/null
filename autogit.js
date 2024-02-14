function biDirectionalSearch(graph, startNode, goalNode) {
  // Create forward and backward queues
  let forwardQueue = [startNode];
  let backwardQueue = [goalNode];

  // Create forward and backward visited sets
  let forwardVisited = new Set();
  let backwardVisited = new Set();

  // Create forward and backward parents maps
  let forwardParents = {};
  let backwardParents = {};

  // Initialize start and goal nodes
  forwardVisited.add(startNode);
  backwardVisited.add(goalNode);
  forwardParents[startNode] = null;
  backwardParents[goalNode] = null;

  // Perform the search
  while (forwardQueue.length && backwardQueue.length) {
    let currentForward = forwardQueue.shift();
    let currentBackward = backwardQueue.shift();

    // Check for common nodes
    if (forwardVisited.has(currentBackward) || backwardVisited.has(currentForward)) {
      let commonNode = forwardVisited.has(currentBackward) ? currentBackward : currentForward;
      return reconstructPath(forwardParents, backwardParents, commonNode);
    }

    // Expand forward search
    for (let neighbor of graph[currentForward]) {
      if (!forwardVisited.has(neighbor)) {
        forwardVisited.add(neighbor);
        forwardParents[neighbor] = currentForward;
        forwardQueue.push(neighbor);
      }
    }

    // Expand backward search
    for (let neighbor of graph[currentBackward]) {
      if (!backwardVisited.has(neighbor)) {
        backwardVisited.add(neighbor);
        backwardParents[neighbor] = currentBackward;
        backwardQueue.push(neighbor);
      }
    }
  }

  // No path found
  return null;
}

function reconstructPath(forwardParents, backwardParents, commonNode) {
  let path = [commonNode];

  // Traverse from start to common node
  let current = commonNode;
  while (forwardParents[current]) {
    current = forwardParents[current];
    path.unshift(current);
  }

  // Traverse from goal to common node
  current = commonNode;
  while (backwardParents[current]) {
    current = backwardParents[current];
    path.push(current);
  }

  return path;
}
