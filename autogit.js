const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};
function depthFirstSearch(start, graph) {
  const visited = new Set(); // Track visited nodes
  dfs(start); // Call the recursive helper function

  // Recursive helper function
  function dfs(node) {
    visited.add(node);
    console.log(node); // You can replace this line with your custom logic

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }
}
depthFirstSearch('A', graph); // 'A' is the starting node
