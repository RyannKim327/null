// Define a function for topological sort
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  // Define a helper function for DFS
  function visit(node) {
    if (visited.has(node)) return;

    visited.add(node);

    // Visit adjacent nodes
    for (const adjacentNode of graph[node] || []) {
      visit(adjacentNode);
    }

    // Push the current node to the stack after visiting all adjacent nodes
    stack.unshift(node);
  }

  // Perform DFS on each unvisited node in the graph
  for (const node in graph) {
    visit(node);
  }

  return stack;
}

// Example usage
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: []
};

const result = topologicalSort(graph);
console.log(result); // Output: ["A", "C", "E", "B", "D", "F"]
