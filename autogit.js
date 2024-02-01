function biDirectionalSearch(graph, startNode, goalNode) {
  let startQueue = [startNode];
  let goalQueue = [goalNode];
  let startParents = { [startNode]: null };
  let goalParents = { [goalNode]: null };

  while (startQueue.length && goalQueue.length) {
    const startNode = startQueue.shift();
    const goalNode = goalQueue.shift();

    if (startNode in goalParents) {
      // Intersection found
      return buildPath(startParents, goalParents, startNode, goalNode);
    }

    // Expand start node's neighbors
    for (let neighbor of graph[startNode]) {
      if (!(neighbor in startParents)) {
        startParents[neighbor] = startNode;
        startQueue.push(neighbor);
      }
    }

    // Expand goal node's neighbors
    for (let neighbor of graph[goalNode]) {
      if (!(neighbor in goalParents)) {
        goalParents[neighbor] = goalNode;
        goalQueue.push(neighbor);
      }
    }
  }

  // No path found
  return null;
}

function buildPath(startParents, goalParents, startNode, goalNode) {
  const path = [];
  let node = startNode;

  while (node !== null) {
    path.push(node);
    node = startParents[node];
  }

  path.reverse();

  node = goalNode;
  while (node !== null) {
    path.push(node);
    node = goalParents[node];
  }

  return path;
}
