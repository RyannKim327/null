function bidirectionalSearch(graph, start, target) {
  // Step 2: Initialization
  const forwardQueue = [start];
  const backwardQueue = [target];
  const forwardVisited = new Set([start]);
  const backwardVisited = new Set([target]);
  const forwardParents = {};
  const backwardParents = {};
  let commonNode = null;

  // Step 6: Bidirectional search
  while (forwardQueue.length && backwardQueue.length) {
    // Forward search
    const currentNode = forwardQueue.shift();
    const neighbors = graph[currentNode];

    for (let neighbor of neighbors) {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardVisited.add(neighbor);
        forwardParents[neighbor] = currentNode;

        if (backwardVisited.has(neighbor)) {
          commonNode = neighbor;
          break;
        }
      }
    }

    if (commonNode) break;

    // Backward search
    const reverseNode = backwardQueue.shift();
    const reverseNeighbors = graph[reverseNode];

    for (let neighbor of reverseNeighbors) {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardVisited.add(neighbor);
        backwardParents[neighbor] = reverseNode;

        if (forwardVisited.has(neighbor)) {
          commonNode = neighbor;
          break;
        }
      }
    }

    if (commonNode) break;
  }

  // Step 7: Reconstruct path
  if (!commonNode) {
    return "Path not found";
  }

  const path = [];
  let node = commonNode;

  while (node !== start) {
    path.unshift(node);
    node = forwardParents[node];
  }

  node = commonNode;

  while (node !== target) {
    node = backwardParents[node];
    path.push(node);
  }

  return [start, ...path, target];
}

// Example usage
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E", "G"],
  G: ["F"],
};

console.log(bidirectionalSearch(graph, "A", "G")); // ["A", "C", "F", "G"]
