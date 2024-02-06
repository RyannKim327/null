function topologicalSort(graph) {
  const visited = new Set();
  const order = [];

  function dfs(node) {
    visited.add(node);

    graph[node].forEach((adjNode) => {
      if (!visited.has(adjNode)) {
        dfs(adjNode);
      }
    });

    order.unshift(node); // Add the node to the beginning of the order list
  }

  Object.keys(graph).forEach((node) => {
    if (!visited.has(node)) {
      dfs(node);
    }
  });

  return order;
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D', 'E'],
  D: ['F'],
  E: ['F'],
  F: []
};

const result = topologicalSort(graph);
console.log(result);
