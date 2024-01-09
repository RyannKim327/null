// Topological Sort algorithm
function topologicalSort(graph) {
  // Visited array to keep track of visited vertices
  const visited = {};
  // Array to store the topological sort order
  const result = [];

  // Depth-first search recursive function
  function dfs(vertex) {
    // Mark the current vertex as visited
    visited[vertex] = true;

    // Iterate over the neighbors of the current vertex
    for (const neighbor of graph[vertex]) {
      // If the neighbor has not been visited, recursively call dfs on it
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }

    // After visiting all neighbors, push the current vertex to the result array
    result.push(vertex);
  }

  // Iterate over all vertices in the graph
  for (const vertex in graph) {
    // If the current vertex has not been visited, call dfs on it
    if (!visited[vertex]) {
      dfs(vertex);
    }
  }

  // Reverse the result array to get the topological sort order
  return result.reverse();
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D", "E"],
  D: ["F"],
  E: ["F"],
  F: [],
};

const sortedOrder = topologicalSort(graph);
console.log(sortedOrder); // Output: ["A", "C", "E", "B", "D", "F"]
