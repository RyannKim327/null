class Graph {
  constructor(numVertices) {
    this.vertices = [];
    this.edges = [];
    this.numVertices = numVertices;
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
  }

  addEdge(source, destination, weight) {
    const edge = new Edge(source, destination, weight);
    this.edges.push(edge);
  }
}

class Edge {
    constructor(source, destination, weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}
function bellmanFord(graph, source) {
  const distances = new Array(graph.numVertices).fill(Infinity);
  distances[source] = 0;

  for (let i = 0; i < graph.numVertices - 1; i++) {
    for (const edge of graph.edges) {
      const { source, destination, weight } = edge;
      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
      }
    }
  }

  for (const edge of graph.edges) {
    const { source, destination, weight } = edge;
    if (distances[source] + weight < distances[destination]) {
      console.log("Negative weight cycle found!");
      return [];
    }
  }

  return distances;
}
// Create a graph
const graph = new Graph(5);
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(0, 1, 2);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, -1);
graph.addEdge(1, 3, 1);
graph.addEdge(2, 3, 3);
graph.addEdge(3, 4, 2);
graph.addEdge(4, 2, -3);

const source = 0;
const distances = bellmanFord(graph, source);
console.log(distances);
