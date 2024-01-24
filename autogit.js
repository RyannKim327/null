class Graph {
  constructor() {
    this.vertices = {};
    this.edges = [];
  }

  addVertex(id) {
    this.vertices[id] = true;
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }
}
function bellmanFord(graph, source) {
  // Step 1: Initialize distances
  const distances = {};
  for (let vertex in graph.vertices) {
    distances[vertex] = vertex === source ? 0 : Infinity;
  }

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < Object.keys(graph.vertices).length - 1; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      const { source, destination, weight } = graph.edges[j];
      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let i = 0; i < graph.edges.length; i++) {
    const { source, destination, weight } = graph.edges[i];
    if (distances[source] + weight < distances[destination]) {
      throw new Error("Graph contains a negative-weight cycle");
    }
  }

  return distances;
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B", 5);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "B", -6);
graph.addEdge("B", "D", 3);
const sourceVertex = "A";
const shortestPaths = bellmanFord(graph, sourceVertex);
console.log(shortestPaths);
