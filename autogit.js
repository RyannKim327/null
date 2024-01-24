function topologicalSort(adjacencyList) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    visited.add(node);

    for (const neighbor of adjacencyList[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.unshift(node);
  }

  for (const node in adjacencyList) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack;
}
const graph = {
  1: [2],
  2: [3, 4],
  3: [],
  4: [5],
  5: []
};
const sortedNodes = topologicalSort(graph);

console.log(sortedNodes); // [1, 2, 4, 5, 3]
