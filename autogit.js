const graph = {};
function addEdge(node1, node2) {
  if (!graph[node1]) graph[node1] = [];
  if (!graph[node2]) graph[node2] = [];
  graph[node1].push(node2);
  graph[node2].push(node1);
}
function depthFirstSearch(startNode) {
  const visited = {};

  function dfs(node) {
    visited[node] = true;
    console.log(node); // Print the visited node

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    }
  }

  dfs(startNode);
}
addEdge(1, 2);
addEdge(1, 3);
addEdge(2, 4);
addEdge(2, 5);
addEdge(3, 6);
addEdge(3, 7);
depthFirstSearch(1);
