function biDirectionalSearch(graph, startNode, endNode) {
  const queueStart = [];
  const queueEnd = [];
  const visitedStart = new Set();
  const visitedEnd = new Set();
  const parentsStart = new Map();
  const parentsEnd = new Map();

  queueStart.push(startNode);
  visitedStart.add(startNode);
  parentsStart.set(startNode, null);

  queueEnd.push(endNode);
  visitedEnd.add(endNode);
  parentsEnd.set(endNode, null);

  while (queueStart.length > 0 && queueEnd.length > 0) {
    const currentStart = queueStart.shift();
    const currentEnd = queueEnd.shift();

    if (visitedEnd.has(currentStart)) {
      // Path found
      return buildPath(currentStart, currentEnd, parentsStart, parentsEnd);
    }

    if (visitedStart.has(currentEnd)) {
      // Path found
      return buildPath(currentStart, currentEnd, parentsStart, parentsEnd);
    }

    const neighborsStart = graph[currentStart] || [];
    for (const neighbor of neighborsStart) {
      if (!visitedStart.has(neighbor)) {
        queueStart.push(neighbor);
        visitedStart.add(neighbor);
        parentsStart.set(neighbor, currentStart);
      }
    }

    const neighborsEnd = graph[currentEnd] || [];
    for (const neighbor of neighborsEnd) {
      if (!visitedEnd.has(neighbor)) {
        queueEnd.push(neighbor);
        visitedEnd.add(neighbor);
        parentsEnd.set(neighbor, currentEnd);
      }
    }
  }

  // No path found
  return null;
}

function buildPath(nodeStart, nodeEnd, parentsStart, parentsEnd) {
  const pathStart = [];
  let current = nodeStart;
  while (current !== null) {
    pathStart.unshift(current);
    current = parentsStart.get(current);
  }

  const pathEnd = [];
  current = nodeEnd;
  while (current !== null) {
    pathEnd.push(current);
    current = parentsEnd.get(current);
  }

  return pathStart.concat(pathEnd);
}
