// Create a graph using an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

// Implement the depth-first search algorithm
function depthFirstSearch(graph, startNode) {
  const visited = new Set();

  function dfs(node) {
    console.log(node);
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  dfs(startNode);
}

// Call the depth-first search function
depthFirstSearch(graph, 'A');
