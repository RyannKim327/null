class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }

  dfs(startVertex) {
    const visited = new Set();
    this._dfsRecursive(startVertex, visited);
  }

  _dfsRecursive(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);

    const neighbors = this.vertices.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this._dfsRecursive(neighbor, visited);
      }
    }
  }
}

// Test the DFS algorithm
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

console.log('Depth-First Search (DFS):');
graph.dfs('A');
