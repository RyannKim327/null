class Vertex {
  constructor(name) {
    this.name = name;
    this.adjacentEdges = [];
  }
}

class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.vertices = [];
  }

  addVertex(name) {
    this.vertices.push(new Vertex(name));
  }

  addEdge(source, destination, weight) {
    const sourceVertex = this.vertices.find((vertex) => vertex.name === source);
    const destinationVertex = this.vertices.find(
      (vertex) => vertex.name === destination
    );
    sourceVertex.adjacentEdges.push(
      new Edge(sourceVertex, destinationVertex, weight)
    );
  }
}

function bellmanFord(graph, startVertex) {
  const dist = {};
  const vertices = graph.vertices;

  // Initialize distances
  for (const vertex of vertices) {
    dist[vertex.name] = Infinity;
  }
  dist[startVertex] = 0;

  // Relax edges V-1 times
  for (let i = 0; i < vertices.length - 1; i++) {
    for (const vertex of vertices) {
      for (const edge of vertex.adjacentEdges) {
        if (dist[edge.source.name] + edge.weight < dist[edge.destination.name]) {
          dist[edge.destination.name] = dist[edge.source.name] + edge.weight;
        }
      }
    }
  }

  // Check for negative weight cycles
  for (const vertex of vertices) {
    for (const edge of vertex.adjacentEdges) {
      if (dist[edge.source.name] + edge.weight < dist[edge.destination.name]) {
        return false; // Negative weight cycle exists
      }
    }
  }

  return dist;
}

// Usage example
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B", 5);
graph.addEdge("B", "C", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "A", -10);

const startVertex = "A";
const shortestPaths = bellmanFord(graph, startVertex);

console.log(shortestPaths);
