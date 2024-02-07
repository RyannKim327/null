class Graph {
  constructor(vertices) {
    this.V = vertices; // Number of vertices
    this.edges = []; // Array to store edges
  }

  addEdge(u, v, w) {
    this.edges.push({ u, v, w });
  }
}

function initializeDistances(graph, source) {
  const distances = [];

  for (let i = 0; i < graph.V; i++) {
    distances[i] = Infinity;
  }
  
  distances[source] = 0;

  return distances;
}
function bellmanFord(graph, source) {
  const distances = initializeDistances(graph, source);

  for (let i = 0; i < graph.V - 1; i++) {
    // Iterate over all edges
    for (let j = 0; j < graph.edges.length; j++) {
      const { u, v, w } = graph.edges[j];
      
      if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
        distances[v] = distances[u] + w;
      }
    }
  }
  
  // Check for negative cycles
  for (let i = 0; i < graph.edges.length; i++) {
    const { u, v, w } = graph.edges[i];

    if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
      // Negative cycle exists
      throw new Error("Graph contains a negative cycle");
    }
  }

  return distances;
}
// Create a new graph
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

// Run Bellman-Ford algorithm from source node 0
const source = 0;
const distances = bellmanFord(graph, source);

console.log(`Shortest distances from node ${source}: `, distances);
