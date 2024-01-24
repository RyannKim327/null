function topologicalSort(graph) {
  const result = [];
  const visited = new Set();

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

    result.push(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return result.reverse();
}
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D', 'E'],
  D: ['F'],
  E: ['F'],
  F: [],
};

const result = topologicalSort(graph);
console.log(result); // Output: [ 'A', 'C', 'E', 'B', 'D', 'F' ]
