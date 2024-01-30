function bidirectionalSearch(graph, start, target) {
  const visitedFromStart = new Set();
  const visitedFromTarget = new Set();
  const queueStart = [start];
  const queueTarget = [target];
  const parentFromStart = new Map();
  const parentFromTarget = new Map();

  visitedFromStart.add(start);
  visitedFromTarget.add(target);
  
  while (queueStart.length && queueTarget.length) {
    const nodeStart = queueStart.shift();
    const nodeTarget = queueTarget.shift();
    
    if (visitedFromTarget.has(nodeStart)) {
      return getPath(nodeStart, nodeTarget, parentFromStart, parentFromTarget);
    }
    
    if (visitedFromStart.has(nodeTarget)) {
      return getPath(nodeStart, nodeTarget, parentFromStart, parentFromTarget);
    }

    for (const neighbor of graph[nodeStart]) {
      if (!visitedFromStart.has(neighbor)) {
        queueStart.push(neighbor);
        visitedFromStart.add(neighbor);
        parentFromStart.set(neighbor, nodeStart);
      }
    }

    for (const neighbor of graph[nodeTarget]) {
      if (!visitedFromTarget.has(neighbor)) {
        queueTarget.push(neighbor);
        visitedFromTarget.add(neighbor);
        parentFromTarget.set(neighbor, nodeTarget);
      }
    }
  }
  
  return null; // No path found
}

function getPath(start, target, parentFromStart, parentFromTarget) {
  const path = [];
  let currentNode = start;
  while (currentNode !== target) {
    path.push(currentNode);
    currentNode = parentFromStart.get(currentNode);
  }
  path.push(target);
  
  currentNode = target;
  while (currentNode !== start) {
    path.unshift(currentNode);
    currentNode = parentFromTarget.get(currentNode);
  }
  
  return path;
}
