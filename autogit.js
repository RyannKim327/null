// Define a graph using adjacency list representation
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

// Define a function for depth-first search
function dfs(graph, node, visited) {
  if (!visited.includes(node)) {
    console.log(`Visiting node: ${node}`);
    visited.push(node);
    
    const neighbors = graph[node];
    for (const neighbor of neighbors) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Start the depth-first search with a starting node
const startingNode = 'A';
dfs(graph, startingNode, []);
