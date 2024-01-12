class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return;
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}
function depthFirstSearch(graph, startVertex) {
  const visited = {};
  const result = [];

  function dfs(vertex) {
    if (!vertex) {
      return null;
    }

    visited[vertex] = true;
    result.push(vertex);

    graph.adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    });
  }

  dfs(startVertex);

  return result;
}
// Create a graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');
graph.addEdge('C', 'E');

// Test DFS
console.log(depthFirstSearch(graph, 'A')); // Output: [ 'A', 'B', 'D', 'E', 'C' ]
