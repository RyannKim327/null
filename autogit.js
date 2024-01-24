class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }
}
function depthFirstSearch(graph, startVertex) {
  const visited = {};
  dfs(startVertex);

  function dfs(vertex) {
    visited[vertex] = true;
    console.log(vertex); // You can replace this with any required traversal logic

    const neighbors = graph.vertices[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      if (!visited[neighbors[i]]) {
        dfs(neighbors[i]);
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

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
depthFirstSearch(graph, 'A');
