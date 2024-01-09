class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }
}
function bellmanFord(graph, source) {
  // Step 1: Initialize distances
  let distances = Array(graph.numVertices).fill(Infinity);
  distances[source] = 0;

  // Step 2: Relax all edges multiple times
  for (let i = 0; i < graph.numVertices - 1; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      let { source, destination, weight } = graph.edges[j];
      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
      }
    }
  }

  // Step 3: Check for negative weight cycles
  for (let i = 0; i < graph.edges.length; i++) {
    let { source, destination, weight } = graph.edges[i];
    if (distances[source] + weight < distances[destination]) {
      throw new Error("Graph contains negative weight cycle");
    }
  }

  return distances;
}
// Create a graph with 5 vertices
let graph = new Graph(5);

// Add edges to the graph (source, destination, weight)
graph.addEdge(0, 1, 6);
graph.addEdge(0, 2, 7);
graph.addEdge(1, 2, 8);
graph.addEdge(1, 3, 5);
graph.addEdge(1, 4, -4);
graph.addEdge(2, 3, -3);
graph.addEdge(2, 4, 9);
graph.addEdge(3, 1, -2);
graph.addEdge(4, 0, 2);
graph.addEdge(4, 3, 7);

// Find the shortest paths from vertex 0
let distances = bellmanFord(graph, 0);
console.log(distances); // Output: [0, 2, 7, 4, -2]
