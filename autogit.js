class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }

  depthFirstSearch(startingVertex) {
    const visited = {};
    this._dfs(startingVertex, visited);
  }

  _dfs(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);

    for (const neighbor of this.adjList[vertex]) {
      if (!visited[neighbor]) {
        this._dfs(neighbor, visited);
      }
    }
  }
}

// Example usage
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.depthFirstSearch(1);
