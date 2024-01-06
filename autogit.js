class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjList.set(vertex, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }
}
function breadthFirstSearch(graph, startVertex) {
  const visited = new Map();
  const queue = [];

  visited.set(startVertex, true);
  queue.push(startVertex);

  while (queue.length > 0) {
    const vertex = queue.shift();
    const neighbors = graph.adjList.get(vertex);

    console.log(vertex); // Do something with the visited vertex, e.g., print it

    for (const neighbor of neighbors) {
      if (!visited.get(neighbor)) {
        visited.set(neighbor, true);
        queue.push(neighbor);
      }
    }
  }
}
const graph = new Graph();

// Add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
breadthFirstSearch(graph, 'A');
