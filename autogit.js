function bidirectionalSearch(graph, startNode, endNode) {
  // Initialize sets
  const startSet = new Set();
  const endSet = new Set();
  startSet.add(startNode);
  endSet.add(endNode);

  // Keep track of visited nodes
  const visited = new Set();

  // Perform the search
  while (startSet.size > 0 && endSet.size > 0) {
    // Expand search from start node
    const startPath = expandSearch(graph, startSet, visited);
    if (startPath) {
      return startPath.concat(expandSearch(graph, endSet, visited).reverse());
    }

    // Expand search from end node
    const endPath = expandSearch(graph, endSet, visited);
    if (endPath) {
      return endPath.concat(expandSearch(graph, startSet, visited).reverse());
    }
  }

  // Path not found
  return null;
}

function expandSearch(graph, set, visited) {
  const node = set.values().next().value;
  set.delete(node);

  for (const adjacentNode of graph[node]) {
    if (visited.has(adjacentNode)) continue;
    visited.add(adjacentNode);
    set.add(adjacentNode);
  }

  return node;
}

// Example usage
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

const shortestPath = bidirectionalSearch(graph, "A", "F");
console.log(shortestPath); // Output: ["A", "C", "F"]
