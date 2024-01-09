function topologicalSort(graph) {
  const visited = new Set();
  const sorted = [];

  function dfs(node) {
    visited.add(node);

    graph[node].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    });

    sorted.push(node);
  }

  Object.keys(graph).forEach(node => {
    if (!visited.has(node)) {
      dfs(node);
    }
  });

  return sorted.reverse();
}

// Example usage:
const dependencies = {
  A: ["D"],
  B: ["D"],
  C: ["A", "B"],
  D: [],
  E: ["D"],
};

console.log(topologicalSort(dependencies));
