function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    visited.add(node);
    if (graph[node]) {
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    }
    stack.unshift(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack;
}
// Example graph
const graph = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['D', 'E'],
  'D': ['F'],
  'E': ['F'],
  'F': []
};

// Perform topological sort
const sortedNodes = topologicalSort(graph);
console.log(sortedNodes); // Output: ['A', 'C', 'E', 'B', 'D', 'F']
