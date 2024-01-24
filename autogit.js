function topologicalSort(adjacencyList) {
  const result = [];
  const visited = new Set();

  function dfs(vertex) {
    visited.add(vertex);

    const neighbors = adjacencyList[vertex] || [];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    result.unshift(vertex);
  }

  for (const vertex in adjacencyList) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  return result;
}
