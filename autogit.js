class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(name) {
    this.vertices.set(name, new Map());
  }

  addEdge(source, destination, weight) {
    this.vertices.get(source).set(destination, weight);
    this.vertices.get(destination).set(source, weight);
  }
}
function dijkstra(graph, source, destination) {
  const distances = new Map(); // Stores the shortest distance from source to each vertex
  const previous = new Map(); // Stores the previous vertex in the shortest path
  const visited = new Set(); // Stores visited vertices

  // Set the initial distances to infinity and the source vertex to 0
  for (const vertex of graph.vertices.keys()) {
    distances.set(vertex, Infinity);
  }
  
  distances.set(source, 0);

  while (visited.size !== graph.vertices.size) {
    // Find the vertex with the minimum distance
    let current = null;
    for (const vertex of graph.vertices.keys()) {
      if (!visited.has(vertex) && (current === null || distances.get(vertex) < distances.get(current))) {
        current = vertex;
      }
    }

    // Mark the current vertex as visited
    visited.add(current);

    // Update the distances to its neighbors
    for (const [neighbor, weight] of graph.vertices.get(current).entries()) {
      const distance = distances.get(current) + weight;
      if (distance < distances.get(neighbor)) {
        distances.set(neighbor, distance);
        previous.set(neighbor, current);
      }
    }
  }

  // Build the shortest path
  const path = [];
  let current = destination;
  while (current !== source) {
    path.unshift(current);
    current = previous.get(current);
  }
  path.unshift(source);
  
  return {
    distance: distances.get(destination),
    path: path,
  };
}
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

const result = dijkstra(graph, 'A', 'E');

console.log('Shortest distance:', result.distance);
console.log('Shortest path:', result.path);
