function topologicalSort(graph) {
  const visited = [];
  const result = [];

  function dfs(node) {
    visited.push(node);

    graph[node].forEach((neighbor) => {
      if (!visited.includes(neighbor)) {
        dfs(neighbor);
      }
    });

    result.unshift(node);
  }

  for (const node in graph) {
    if (!visited.includes(node)) {
      dfs(node);
    }
  }

  return result;
}
const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D", "E"],
  D: ["F"],
  E: [],
  F: [],
};
console.log(topologicalSort(graph));
