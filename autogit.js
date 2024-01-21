function dfs(node, visited, stack, graph) {
  visited.add(node); // Mark the current node as visited
  // Recursive DFS for all neighbors
  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited, stack, graph);
    }
  }
  stack.push(node); // Push the current node to the stack
}
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  // Iterate over each node in the graph
  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node, visited, stack, graph);
    }
  }

  // Return the reversed stack as the topological ordering
  return stack.reverse();
}
// Example graph represented by an adjacency list
const graph = {
  A: ['B', 'C'],
  B: [],
  C: ['D'],
  D: ['E'],
  E: [],
};

// Perform topological sort
const sortedNodes = topologicalSort(graph);
console.log(sortedNodes); // Output: [ 'A', 'C', 'D', 'E', 'B' ]
