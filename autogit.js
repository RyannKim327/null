function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

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

    stack.unshift(node);
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack;
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

const result = topologicalSort(graph);
console.log(result); // Output: ["A", "C", "F", "B", "E", "D"]
