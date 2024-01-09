function topologicalSort(graph) {
  const sorted = [];
  const visited = new Set();

  function dfs(node) {
    visited.add(node);

    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    sorted.unshift(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return sorted;
}
const graph = {
  A: ["C", "D"],
  B: ["D", "E"],
  C: ["F"],
  D: ["F", "G"],
  E: ["G"],
  F: ["H"],
  G: ["H"],
  H: []
};

const sorted = topologicalSort(graph);
console.log(sorted); // Output: ['B', 'E', 'A', 'D', 'G', 'C', 'F', 'H']
