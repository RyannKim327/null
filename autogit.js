function biDirectionalSearch(graph, startNode, goalNode) {
  // Forward search variables
  const forwardQueue = [startNode];
  const forwardVisited = new Set();
  forwardVisited.add(startNode);

  // Backward search variables
  const backwardQueue = [goalNode];
  const backwardVisited = new Set();
  backwardVisited.add(goalNode);

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    const commonNode = getCommonNode(forwardQueue, forwardVisited, backwardVisited);
    if (commonNode) {
      // Found a common node, path from startNode to goalNode exists
      return getPath(startNode, goalNode, commonNode);
    }

    expandForward(forwardQueue, forwardVisited, graph);
    expandBackward(backwardQueue, backwardVisited, graph);
  }

  // No path exists from startNode to goalNode
  return null;
}

function expandForward(queue, visited, graph) {
  const currentNode = queue.shift();

  // Process currentNode
  // ...

  // Enqueue unvisited neighbors
  for (const neighbor of graph[currentNode]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }
}

function expandBackward(queue, visited, graph) {
  const currentNode = queue.shift();

  // Process currentNode
  // ...

  // Enqueue unvisited neighbors
  for (const neighbor of graph[currentNode]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);
    }
  }
}

function getCommonNode(forwardQueue, forwardVisited, backwardVisited) {
  for (const node of forwardQueue) {
    if (backwardVisited.has(node)) {
      return node;
    }
  }
  return null;
}

function getPath(startNode, goalNode, commonNode) {
  // Generate path from startNode to commonNode
  const path1 = bfs(startNode, commonNode, graph);

  // Generate path from commonNode to goalNode
  const path2 = bfs(goalNode, commonNode, graph);

  // Combine the two paths
  return path1.concat(path2.reverse());
}
