function topologicalSort(adjacencyList) {
  const result = [];
  const visited = new Set();

  function dfs(vertex) {
    visited.add(vertex);

    const neighbors = adjacencyList[vertex];
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    }

    result.push(vertex);
  }

  for (const vertex in adjacencyList) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  result.reverse();
  return result;
}
