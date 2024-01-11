// Create a graph represented as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F', 'G'],
  D: [],
  E: [],
  F: ['H'],
  G: [],
  H: []
};

// Depth-Limited Search algorithm
function depthLimitedSearch(graph, node, depth) {
  console.log(node); // Process the current node
  if (depth === 0) return; // Exit if depth limit reached

  const neighbors = graph[node];
  for (const neighbor of neighbors) {
    depthLimitedSearch(graph, neighbor, depth - 1); // Recursively search the neighbors
  }
}

// Usage
depthLimitedSearch(graph, 'A', 2);
