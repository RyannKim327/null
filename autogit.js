function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    visited.add(node);

    const neighbors = graph[node];
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    }

    stack.push(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack.reverse();
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D', 'E'],
  D: ['F'],
  E: ['F'],
  F: [],
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes); // Output: [ 'A', 'C', 'E', 'B', 'D', 'F' ]
