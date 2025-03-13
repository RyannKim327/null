interface Edge {
  source: number;
  destination: number;
  weight: number;
}

class BellmanFordShortestPath {
  // Number of vertices in the graph
  private vertices: number;
  // List of edges
  private edges: Edge[];

  constructor(vertices: number) {
    this.vertices = vertices;
    this.edges = [];
  }

  // Add an edge to the graph
  addEdge(source: number, destination: number, weight: number): void {
    const edge: Edge = { source, destination, weight };
    this.edges.push(edge);
  }

  // Main Bellman-Ford algorithm implementation
  findShortestPaths(source: number): number[] | null {
    // Initialize distances array
    const distances: number[] = new Array(this.vertices).fill(Infinity);
    distances[source] = 0;

    // Relax all edges |V| - 1 times
    for (let i = 1; i < this.vertices; i++) {
      for (const edge of this.edges) {
        const u = edge.source;
        const v = edge.destination;
        const weight = edge.weight;

        // Relaxation step
        if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
          distances[v] = distances[u] + weight;
        }
      }
    }

    // Check for negative weight cycles
    for (const edge of this.edges) {
      const u = edge.source;
      const v = edge.destination;
      const weight = edge.weight;

      // If we can still relax an edge, there's a negative cycle
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        return null; // Negative cycle detected
      }
    }

    return distances;
  }
}

// Example usage
function example() {
  // Create a graph with 5 vertices
  const graph = new BellmanFordShortestPath(5);

  // Add edges
  graph.addEdge(0, 1, 4);
  graph.addEdge(0, 2, 2);
  graph.addEdge(1, 3, 3);
  graph.addEdge(2, 1, 1);
  graph.addEdge(2, 3, 5);
  graph.addEdge(3, 4, 2);

  // Find shortest paths from source vertex 0
  const shortestPaths = graph.findShortestPaths(0);

  if (shortestPaths) {
    console.log("Shortest distances from source vertex:");
    shortestPaths.forEach((distance, vertex) => {
      console.log(`Vertex ${vertex}: ${distance}`);
    });
  } else {
    console.log("Negative weight cycle detected!");
  }
}

// Run the example
example();
