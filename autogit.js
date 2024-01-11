const graph = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['D', 'E'],
  'D': [],
  'E': ['F'],
  'F': []
};
function topologicalSort(graph) {
  const visited = new Set();
  const sorted = [];

  function dfs(node) {
    visited.add(node);
    graph[node].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    });
    sorted.unshift(node); // Prepend node to the sorted list
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return sorted;
}
const result = topologicalSort(graph);
console.log(result); // Output: ['A', 'C', 'E', 'F', 'B', 'D']
