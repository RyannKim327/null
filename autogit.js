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

  getNeighbors(vertex) {
    return this.vertices[vertex];
  }
}
function breadthFirstSearch(graph, startVertex) {
  const queue = [startVertex]; // Initialize a queue with the starting vertex
  const visited = new Set(); // Track the visited vertices
  visited.add(startVertex);

  while (queue.length > 0) {
    const currentVertex = queue.shift();
    console.log(currentVertex); // Or perform any other operation on the current vertex

    const neighbors = graph.getNeighbors(currentVertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
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
graph.addEdge('D', 'E');
breadthFirstSearch(graph, 'A');
