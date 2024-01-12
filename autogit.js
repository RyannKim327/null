function bidirectionalSearch(start, end, getNeighbors) {
  const forwardFrontier = new Set([start]);
  const backwardFrontier = new Set([end]);
  
  const forwardParents = {};
  const backwardParents = {};

  forwardParents[start] = null;
  backwardParents[end] = null;

  while (forwardFrontier.size > 0 && backwardFrontier.size > 0) {
    // Check if any node in the forward frontier exists in the backward frontier
    for (const node of forwardFrontier) {
      if (backwardFrontier.has(node)) {
        // Path found, reconstruct and return the complete path
        return reconstructPath(node, forwardParents, backwardParents);
      }
    }
    
    // Expand nodes in the forward frontier
    const newForwardFrontier = new Set();
    for (const node of forwardFrontier) {
      const neighbors = getNeighbors(node);
      for (const neighbor of neighbors) {
        if (!forwardParents.hasOwnProperty(neighbor)) {
          forwardParents[neighbor] = node;
          newForwardFrontier.add(neighbor);
        }
      }
    }
    forwardFrontier.clear();
    forwardFrontier.addAll(newForwardFrontier);
    
    // Expand nodes in the backward frontier
    const newBackwardFrontier = new Set();
    for (const node of backwardFrontier) {
      const neighbors = getNeighbors(node);
      for (const neighbor of neighbors) {
        if (!backwardParents.hasOwnProperty(neighbor)) {
          backwardParents[neighbor] = node;
          newBackwardFrontier.add(neighbor);
        }
      }
    }
    backwardFrontier.clear();
    backwardFrontier.addAll(newBackwardFrontier);
  }

  // No path found
  return null;
}

function reconstructPath(node, forwardParents, backwardParents) {
  const forwardPath = [];
  let current = node;
  while (current) {
    forwardPath.unshift(current);
    current = forwardParents[current];
  }
  
  const backwardPath = [];
  current = backwardParents[node];
  while (current) {
    backwardPath.push(current);
    current = backwardParents[current];
  }
  
  return forwardPath.concat(backwardPath);
}
