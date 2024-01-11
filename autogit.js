function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    visited.add(node);

    // Visit all neighbors
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    // Push the node to the stack after visiting all neighbors
    stack.unshift(node);
  }

  // Visit all nodes in the graph
  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack;
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

const sorted = topologicalSort(graph);
console.log(sorted);
