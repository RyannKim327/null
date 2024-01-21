function topologicalSort(graph) {
  const result = []; // Stores the sorted nodes
  const visited = {}; // Keeps track of visited nodes

  function dfs(current) {
    visited[current] = true; // Mark the current node as visited

    const neighbors = graph[current]; // Get the adjacent nodes

    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          dfs(neighbor); // Recursively call dfs on the neighbor
        }
      }
    }

    result.unshift(current); // Add the current node to the result array
  }

  // Iterate over all nodes in the graph
  for (const node in graph) {
    if (!visited[node]) {
      dfs(node); // Call dfs on unvisited nodes
    }
  }

  return result;
}

// Example usage:
const graph = {
  A: ["C", "D"],
  B: ["D", "E"],
  C: ["F"],
  D: ["F"],
  E: [],
  F: [],
};

console.log(topologicalSort(graph)); // Output: [ 'B', 'E', 'A', 'D', 'C', 'F' ]
