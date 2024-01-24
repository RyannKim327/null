function topologicalSort(graph) {
  const visited = [];
  const result = [];

  function dfs(node) {
    if (visited.includes(node)) return;

    visited.push(node);

    const neighbors = graph[node];
    if (neighbors) {
      for (let i = 0; i < neighbors.length; i++) {
        dfs(neighbors[i]);
      }
    }

    result.unshift(node);
  }

  for (const node in graph) {
    dfs(node);
  }

  return result;
}
const myGraph = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['D', 'E'],
  'D': ['F'],
  'E': [],
  'F': []
};

const sortedOrder = topologicalSort(myGraph);
console.log(sortedOrder); // Output: ['A', 'C', 'E', 'B', 'D', 'F']
