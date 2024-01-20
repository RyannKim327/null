class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  dfs(startVertex, visited = {}) {
    console.log(startVertex);
    visited[startVertex] = true;

    for (const neighbor of this.adjacencyList[startVertex]) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited);
      }
    }
  }
}

// Example usage
const myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addEdge('A', 'B');
myGraph.addEdge('B', 'D');
myGraph.addEdge('D', 'C');

myGraph.dfs('A');
