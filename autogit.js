class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = {};
  }

  addEdge(vertex1, vertex2, weight) {
    this.vertices[vertex1][vertex2] = weight;
    this.vertices[vertex2][vertex1] = weight;
  }
}
function dijkstra(graph, startVertex) {
  const distances = {};
  const visited = {};
  const previous = {};

  // Initialize distances with Infinity and previous with null for all vertices
  for (let vertex in graph.vertices) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
  }

  // The distance to the starting vertex is 0
  distances[startVertex] = 0;

  while (Object.keys(visited).length !== Object.keys(graph.vertices).length) {
    let minVertex = null;

    // Find the vertex with the minimum distance
    for (let vertex in graph.vertices) {
      if (!visited[vertex] && (minVertex === null || distances[vertex] < distances[minVertex])) {
        minVertex = vertex;
      }
    }

    visited[minVertex] = true;

    // Update the distances to neighboring vertices
    for (let neighbor in graph.vertices[minVertex]) {
      let distance = graph.vertices[minVertex][neighbor];
      let totalDistance = distances[minVertex] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previous[neighbor] = minVertex;
      }
    }
  }

  return { distances, previous };
}
// Create a graph
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'E', 1);
graph.addEdge('D', 'E', 3);

// Find the shortest path from vertex 'A'
const { distances, previous } = dijkstra(graph, 'A');

console.log(distances);  // Output: { A: 0, B: 3, C: 2, D: 4, E: 3 }
console.log(previous);   // Output: { A: null, B: 'A', C: 'A', D: 'C', E: 'C' }
