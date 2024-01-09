function dfs(graph, startNode, visited = []) {
  // Mark the current node as visited
  visited.push(startNode);

  // Iterate over the neighbors of the current node
  for (const neighbor of graph[startNode]) {
    // If the neighbor hasn't been visited, recursively call dfs
    if (!visited.includes(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }

  // Return the visited nodes
  return visited;
}

// Example graph representation using an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

// Test the algorithm
console.log(dfs(graph, 'A')); // Output: ["A", "B", "D", "E", "F", "C"]
