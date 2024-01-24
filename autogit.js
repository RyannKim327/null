const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D", "E"],
  D: [],
  E: []
};
function topologicalSort(graph) {
  const result = [];
  const visited = {};

  function dfs(node) {
    if (visited[node]) return;
    visited[node] = true;

    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }

    result.push(node);
  }

  for (const node in graph) {
    dfs(node);
  }

  return result.reverse();
}

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D", "E"],
  D: [],
  E: []
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes); // Output: [ 'A', 'C', 'E', 'B', 'D' ]
