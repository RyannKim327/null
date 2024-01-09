const graph = [
  [1, 2],    // Node 0 is connected to nodes 1 and 2
  [0, 3, 4], // Node 1 is connected to nodes 0, 3, and 4
  [0],       // Node 2 is connected to node 0
  [1],       // Node 3 is connected to node 1
  [1]        // Node 4 is connected to node 1
];
function dfs(graph, node, visited) {
  visited[node] = true; // Mark the current node as visited
  console.log("Visiting node:", node);

  // Recursively visit all unvisited neighbors
  for (let neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfs(graph, neighbor, visited);
    }
  }
}
const startNode = 0; // Start from node 0
const visited = new Array(graph.length).fill(false); // Mark all nodes as unvisited

dfs(graph, startNode, visited);
