class Graph {
  constructor(vertices) {
    this.vertices = vertices; // Number of vertices
    this.edges = []; // Array to store edges
  }

  addEdge(from, to, weight) {
    this.edges.push({ from, to, weight });
  }
}
function bellmanFord(graph, source, vertices) {
  // Step 1: Initialize distances from source to all other vertices as Infinity
  const distances = Array(vertices).fill(Infinity);
  distances[source] = 0;

  // Step 2: Relax all edges |V|-1 times
  for (let i = 1; i < vertices; ++i) {
    for (const { from, to, weight } of graph.edges) {
      if (distances[from] != Infinity && distances[from] + weight < distances[to]) {
        distances[to] = distances[from] + weight;
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (const { from, to, weight } of graph.edges) {
    if (distances[from] != Infinity && distances[from] + weight < distances[to]) {
      throw new Error('Graph contains a negative-weight cycle');
    }
  }

  return distances;
}
const graph = new Graph(5); // Create a graph with 5 vertices
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

const source = 0;
const distances = bellmanFord(graph, source, graph.vertices);
console.log(distances);
