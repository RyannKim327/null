function topologicalSort(graph) {
  const orderedNodes = [];
  const visited = new Set();

  function dfs(node) {
    visited.add(node);

    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    orderedNodes.unshift(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return orderedNodes;
}

// Example usage:
const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': [],
  'E': ['F'],
  'F': []
};

const orderedNodes = topologicalSort(graph);
console.log(orderedNodes); // Output: ['A', 'C', 'F', 'B', 'E', 'D']
