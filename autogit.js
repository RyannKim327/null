function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    visited.add(node);
    graph[node].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    });
    stack.unshift(node);
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack;
}

// Example graph representation using adjacency list
const graph = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['D'],
  'D': ['E'],
  'E': []
};

const result = topologicalSort(graph);
console.log(result); // Output: ['A', 'C', 'B', 'D', 'E']
