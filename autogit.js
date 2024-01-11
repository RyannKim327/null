function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(vertex) {
    visited.add(vertex);

    for (const adjacentVertex of graph[vertex]) {
      if (!visited.has(adjacentVertex)) {
        dfs(adjacentVertex);
      }
    }

    stack.push(vertex);
  }

  for (const vertex in graph) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  return stack.reverse();
}
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D', 'E'],
  D: [],
  E: ['F'],
  F: [],
};

const sortedVertices = topologicalSort(graph);
console.log(sortedVertices); // Output: ['A', 'C', 'E', 'F', 'B', 'D']
