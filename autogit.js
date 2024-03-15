class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }

  dfsUtil(vertex, visited) {
    visited.add(vertex);

    console.log(vertex);

    let neighbours = this.adjList.get(vertex);

    for (let neighbour of neighbours) {
      if (!visited.has(neighbour)) {
        this.dfsUtil(neighbour, visited);
      }
    }
  }

  dfs(startVertex) {
    let visited = new Set();

    this.dfsUtil(startVertex, visited);
  }
}

// Test the implementation

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');

console.log('Depth First Traversal:');
graph.dfs('A');
