function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  // DFS function
  function dfs(node) {
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.unshift(node); // add node to the front of the stack
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack;
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D'],
  D: []
};

const result = topologicalSort(graph);
console.log(result); // Output: ['A', 'C', 'B', 'D']
