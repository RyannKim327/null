function topologicalSort(graph) {
  const visited = new Set();
  const order = [];

  function dfs(node) {
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    order.unshift(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return order;
}
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: [],
  D: ['E'],
  E: [],
};
console.log(topologicalSort(graph));
