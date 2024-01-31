function forwardSearch(graph, start, goal) {
  const visited = new Set();
  const queue = [[start, [start]]];

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    visited.add(current);

    if (current === goal) {
      return path;
    }

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, path.concat(neighbor)]);
      }
    }
  }

  return null; // No path found
}

function backwardSearch(graph, start, goal) {
  const visited = new Set();
  const queue = [[goal, [goal]]];

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    visited.add(current);

    if (current === start) {
      return path.reverse();
    }

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, path.concat(neighbor)]);
      }
    }
  }

  return null; // No path found
}

function bidirectionalSearch(graph, start, goal) {
  const commonNode = findCommonNode();

  if (commonNode) {
    const forwardPath = forwardSearch(graph, start, commonNode);
    const backwardPath = backwardSearch(graph, commonNode, goal);
    return forwardPath.concat(backwardPath.slice(1));
  }

  return null; // No path found

  function findCommonNode() {
    const visited = new Set();
    const forwardQueue = [[start]];
    const backwardQueue = [[goal]];

    while (forwardQueue.length > 0 || backwardQueue.length > 0) {
      if (forwardQueue.length > 0) {
        const current = forwardQueue.shift();
        const currentNode = current[current.length - 1];
        visited.add(currentNode);

        if (backwardQueue.some(path => path.includes(currentNode))) {
          return currentNode;
        }

        for (const neighbor of graph[currentNode]) {
          if (!visited.has(neighbor)) {
            forwardQueue.push(current.concat(neighbor));
          }
        }
      }

      if (backwardQueue.length > 0) {
        const current = backwardQueue.shift();
        const currentNode = current[current.length - 1];
        visited.add(currentNode);

        if (forwardQueue.some(path => path.includes(currentNode))) {
          return currentNode;
        }

        for (const neighbor of graph[currentNode]) {
          if (!visited.has(neighbor)) {
            backwardQueue.push(current.concat(neighbor));
          }
        }
      }
    }

    return null; // No common node found
  }
}
