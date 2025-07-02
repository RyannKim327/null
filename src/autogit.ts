type Edge = {
  u: number; // start vertex
  v: number; // end vertex
  weight: number; // weight of the edge
};

class Graph {
  private edges: Edge[];
  private numVertices: number;

  constructor(numVertices: number) {
    this.numVertices = numVertices;
    this.edges = [];
  }

  addEdge(u: number, v: number, weight: number) {
    this.edges.push({ u, v, weight });
  }

  bellmanFord(source: number) {
    const distances = new Array(this.numVertices).fill(Infinity);
    distances[source] = 0;

    // Relax edges up to (numVertices - 1) times
    for (let i = 0; i < this.numVertices - 1; i++) {
      for (const edge of this.edges) {
        const { u, v, weight } = edge;
        if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
          distances[v] = distances[u] + weight;
        }
      }
    }

    // Check for negative weight cycles
    for (const edge of this.edges) {
      const { u, v, weight } = edge;
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        throw new Error("Graph contains a negative weight cycle");
      }
    }

    return distances;
  }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

try {
  const distances = graph.bellmanFord(0);
  console.log('Vertex Distance from Source:', distances);
} catch (error) {
  console.error(error.message);
}
