// Function to perform topological sort using DFS
function topologicalSort(graph) {
  const visited = new Set(); // Set to track visited nodes
  const result = []; // Array to store the sorted elements

  // Recursive helper function to perform DFS
  function dfs(node) {
    visited.add(node); // Mark the current node as visited

    // Recurse on all unvisited neighbors
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    result.unshift(node); // Add the current node to the beginning of the result array
  }

  // Perform DFS on all nodes
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return result;
}

// Example usage:
const graph = {
  A: ["D"],
  B: ["D"],
  C: ["A", "B"],
  D: ["E", "F"],
  E: [],
  F: [],
};

const sortedNodes = topologicalSort(graph);
console.log(sortedNodes); // Output: ['C', 'A', 'B', 'D', 'F', 'E']
