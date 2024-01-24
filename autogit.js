function topologicalSort(graph) {
  const result = [];
  const visited = {};

  function dfs(vertex) {
    visited[vertex] = true;
    graph[vertex].forEach((adjacent) => {
      if (!visited[adjacent]) {
        dfs(adjacent);
      }
    });
    result.unshift(vertex);
  }

  Object.keys(graph).forEach((vertex) => {
    if (!visited[vertex]) {
      dfs(vertex);
    }
  });

  return result;
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D", "E"],
  D: [],
  E: ["F"],
  F: [],
};

console.log(topologicalSort(graph)); // Output: ["A", "C", "E", "F", "B", "D"]
