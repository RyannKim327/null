class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = [];
  }

  addEdge(fromVertex, toVertex) {
    this.vertices[fromVertex].push(toVertex);
  }

  dfs(startingVertex) {
    let visited = {};
    this._dfsUtil(startingVertex, visited);
  }

  _dfsUtil(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);

    for (let neighbor of this.vertices[vertex]) {
      if (!visited[neighbor]) {
        this._dfsUtil(neighbor, visited);
      }
    }
  }
}
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
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.dfs('A');
