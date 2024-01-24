function biDirectionalSearch(graph, start, goal) {
  // Initialization
  let forwardQueue = [start];
  let backwardQueue = [goal];
  let forwardVisited = new Set();
  let backwardVisited = new Set();
  let parents = {};

  // Main search algorithm
  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Perform one step of the forward search
    let forwardNode = forwardQueue.shift();
    forwardVisited.add(forwardNode);
    
    if (backwardVisited.has(forwardNode)) {
      // path found
      return reconstructPath(forwardNode, parents, start, goal);
    }

    // Expand neighbors of the forward node
    for (let neighbor of graph[forwardNode]) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited.add(neighbor);
        parents[neighbor] = forwardNode;
      }
    }

    // Perform one step of the backward search
    let backwardNode = backwardQueue.shift();
    backwardVisited.add(backwardNode);
    
    if (forwardVisited.has(backwardNode)) {
      // path found
      return reconstructPath(backwardNode, parents, start, goal);
    }

    // Expand neighbors of the backward node
    for (let neighbor of graph[backwardNode]) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardVisited.add(neighbor);
        parents[neighbor] = backwardNode;
      }
    }
  }

  // No path found
  return null;
}

function reconstructPath(commonNode, parents, start, goal) {
  let path = [];
  let current = commonNode;

  // Reconstruct path from start to common node
  while (current !== start) {
    path.unshift(current);
    current = parents[current];
  }
  
  current = parents[commonNode];
  
  // Reconstruct path from goal to common node
  while (current !== goal) {
    path.push(current);
    current = parents[current];
  }
  
  // Add the common node
  path.push(commonNode);
  
  return path;
}
