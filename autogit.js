class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    this.adjList[vertex] = [];
  }

  addEdge(source, destination) {
    this.adjList[source].push(destination);
  }
}
function dfs(graph, startVertex, visited = {}) {
  console.log(startVertex);
  visited[startVertex] = true;

  for (const neighbor of graph.adjList[startVertex]) {
    if (!visited[neighbor]) {
      dfs(graph, neighbor, visited);
    }
  }
}
const graph = new Graph();

// Add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

// Perform DFS
dfs(graph, 'A');
