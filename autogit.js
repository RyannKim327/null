function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.push(node);
  }

  // Perform DFS on all unvisited nodes
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack.reverse(); // Reverse the stack to get the topological order
}
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D', 'E'],
  D: ['F'],
  E: ['F'],
  F: [],
};

const result = topologicalSort(graph);
console.log(result); // Output: ['A', 'C', 'E', 'B', 'D', 'F']
