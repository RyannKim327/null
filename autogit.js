class Graph {
  constructor() {
    this.vertices = []; // Array to store all the vertices
    this.edges = {};   // Object to store edges (adjacency list)
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
  }
}
function breadthFirstSearch(graph, startVertex) {
  const visited = {};               // Object to store visited vertices
  const queue = [startVertex];      // Queue to store vertices to visit

  while (queue.length !== 0) {
    const currentVertex = queue.shift();
    visited[currentVertex] = true;

    // Process the current vertex (you can print it or perform any other operation)
    console.log(currentVertex);

    const adjacentVertices = graph.edges[currentVertex];
    for (let i = 0; i < adjacentVertices.length; i++) {
      const neighborVertex = adjacentVertices[i];
      if (!visited[neighborVertex] && !queue.includes(neighborVertex)) {
        queue.push(neighborVertex);
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
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
breadthFirstSearch(graph, 'A');
