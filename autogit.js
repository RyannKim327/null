class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
    this.adjList.get(vertex2).push(vertex1);
  }
}
class Graph {
  // ...

  depthFirstSearch(startingNode) {
    const visited = new Set();

    this._dfs(startingNode, visited);
  }

  _dfs(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);

    const neighbors = this.adjList.get(vertex);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this._dfs(neighbor, visited);
      }
    }
  }
}
const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.depthFirstSearch(1);
