const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D', 'E'],
  D: ['F'],
  E: ['F'],
  F: [],
};
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(vertex) {
    visited.add(vertex);

    const neighbors = graph[vertex];

    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    });

    stack.unshift(vertex);
  }

  for (const vertex in graph) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  return stack;
}
const sorted = topologicalSort(graph);
console.log(sorted); // Output: ['A', 'C', 'E', 'B', 'D', 'F']
