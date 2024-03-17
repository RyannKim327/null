// Define a simple graph as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

// Depth-First Search function
function dfs(node, visited, graph) {
  if (visited[node]) {
    return;
  }
  
  visited[node] = true;
  console.log(node);
  
  for (let neighbor of graph[node]) {
    dfs(neighbor, visited, graph);
  }
}

// Main DFS function to start the search
function dfsMain(startNode, graph) {
  const visited = {};
  dfs(startNode, visited, graph);
}

// Start DFS from node 'A'
dfsMain('A', graph);
