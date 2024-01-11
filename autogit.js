function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    visited.add(node);

    const neighbors = graph[node];

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.unshift(node); // Push the node onto the stack when all its neighbors are visited
  }

  for (const node in graph) {
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
  D: ["G"],
  E: [],
  F: [],
  G: [],
};
const result = topologicalSort(graph);
console.log(result); // Output: ["A", "C", "F", "B", "E", "D", "G"]
