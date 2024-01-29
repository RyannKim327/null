function topologicalSort(graph) {
  const visited = new Array(graph.length).fill(false);
  const stack = [];

  function dfs(node) {
    visited[node] = true;
    const neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
    stack.push(node);
  }

  for (let i = 0; i < graph.length; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  return stack.reverse();
}

// Example usage:
const graph = [
  [1, 2],      // 0 -> 1, 2
  [3],         // 1 -> 3
  [3],         // 2 -> 3
  [],          // 3 -> null
];

const sortedOrder = topologicalSort(graph);
console.log(sortedOrder); // Output: [0, 2, 1, 3]
