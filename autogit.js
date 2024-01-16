class Graph {
  constructor() {
    this.adjList = new Map(); // Using a Map to store adjacency list
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    this.adjList.get(vertex1).push(vertex2);
  }

  // Get the list of adjacent vertices for a given vertex
  getAdjacentVertices(vertex) {
    return this.adjList.get(vertex);
  }
}
function breadthFirstSearch(graph, startVertex) {
  let visited = new Set(); // To keep track of already visited vertices
  let queue = []; // Queue to store vertices to visit

  visited.add(startVertex);
  queue.push(startVertex);

  while (queue.length > 0) {
    let currentVertex = queue.shift();
    console.log(currentVertex);

    let adjacentVertices = graph.getAdjacentVertices(currentVertex);
    for (let neighbor of adjacentVertices) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
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
