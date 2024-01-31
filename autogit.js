class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }
}
function bellmanFord(graph, source) {
  // Step 1: Initialize distances from source to all other nodes as INFINITE
  let distances = {};
  for (let vertex of graph.vertices) {
    distances[vertex] = Infinity;
  }
  distances[source] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < graph.vertices.length - 1; i++) {
    for (let { source, destination, weight } of graph.edges) {
      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let { source, destination, weight } of graph.edges) {
    if (distances[source] + weight < distances[destination]) {
      throw new Error("Graph contains a negative-weight cycle");
    }
  }

  return distances;
}
const graph = new Graph(["A", "B", "C", "D", "E"]);
graph.addEdge("A", "B", -1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 3);
graph.addEdge("B", "D", 2);
graph.addEdge("B", "E", 2);
graph.addEdge("D", "B", 1);
graph.addEdge("D", "C", 5);
graph.addEdge("E", "D", -3);
const source = "A";
const distances = bellmanFord(graph, source);
console.log(distances);
