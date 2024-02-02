function topologicalSort(graph) {
  // Step 1: Create an empty array to store the result
  const result = [];

  // Step 2: Create a visited array to keep track of visited vertices
  const visited = {};

  // Step 3: Iterate over each vertex in the graph
  for (const vertex in graph) {
    // Call the DFS function for unvisited vertices
    if (!visited[vertex]) {
      dfs(vertex);
    }
  }

  // Step 6: Return the topologically sorted array
  return result;

  // Step 4: Recursive Depth First Search function
  function dfs(vertex) {
    // Mark current vertex as visited
    visited[vertex] = true;

    // Step 5: Recursively visit all adjacent vertices
    for (const neighbor of graph[vertex]) {
      // Call DFS if the neighbor vertex is unvisited
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }

    // Push the current vertex to the result array
    result.unshift(vertex);
  }
}
// Create a sample directed graph
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D', 'E'],
  D: ['F'],
  E: ['F'],
  F: []
};
// Call the topological sort function
const sortedOrder = topologicalSort(graph);

// Print the result
console.log(sortedOrder);
