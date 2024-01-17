class Graph {
  constructor(numOfVertices) {
    this.vertices = numOfVertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }
}
function bellmanFord(graph, source) {
  let distances = {};

  // Step 1: Initialize distances from source to all other vertices as Infinity
  for (let i = 0; i < graph.vertices; i++) {
    distances[i] = Infinity;
  }

  distances[source] = 0;

  // Step 2: Relax all edges |V| - 1 times
  for (let i = 0; i < graph.vertices - 1; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      let { source, destination, weight } = graph.edges[j];
      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let i = 0; i < graph.edges.length; i++) {
    let { source, destination, weight } = graph.edges[i];
    if (distances[source] + weight < distances[destination]) {
      throw new Error("Graph contains negative-weight cycle");
    }
  }

  return distances;
}
let graph = new Graph(5);
graph.addEdge(0, 1, 6);
graph.addEdge(0, 4, 7);
graph.addEdge(1, 2, 5);
graph.addEdge(1, 3, -4);
graph.addEdge(1, 4, 8);
graph.addEdge(2, 1, -2);
graph.addEdge(3, 0, 2);
graph.addEdge(3, 2, 7);
graph.addEdge(4, 2, -3);
graph.addEdge(4, 3, 9);
let sourceNode = 0;
let shortestPaths = bellmanFord(graph, sourceNode);
console.log(shortestPaths);
