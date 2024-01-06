// Function to perform the topological sort
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  // Helper function to perform DFS
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
  'B': ['C', 'D'],
  'C': ['E'],
  'D': ['F'],
  'E': ['D', 'F'],
  'F': []
};

// Perform topological sort
const result = topologicalSort(graph);

// Output the sorted order
console.log(result);
