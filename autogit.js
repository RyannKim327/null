function topologicalSort(graph) {
  const sortedOrder = [];
  const visited = new Set();

  function dfs(node) {
    visited.add(node);

    const neighbors = graph[node];
    if (neighbors) {
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    }
    
    sortedOrder.unshift(node);
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return sortedOrder;
}
const graph = {
  1: [2, 3],
  2: [4],
  3: [4, 5],
  4: [],
  5: []
};

const sortedOrder = topologicalSort(graph);
console.log(sortedOrder);
