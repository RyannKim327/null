class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }

  bellmanFordAlgorithm(source) {
    const dist = Array(this.vertices).fill(Infinity);
    dist[source] = 0;

    // Relax edges repeatedly
    for (let i = 0; i < this.vertices - 1; i++) {
      for (let j = 0; j < this.edges.length; j++) {
        const { source, destination, weight } = this.edges[j];

        if (dist[source] !== Infinity && dist[source] + weight < dist[destination]) {
          dist[destination] = dist[source] + weight;
        }
      }
    }

    // Check for negative weight cycles
    for (let i = 0; i < this.edges.length; i++) {
      const { source, destination, weight } = this.edges[i];

      if (dist[source] !== Infinity && dist[source] + weight < dist[destination]) {
        console.log('Negative weight cycle detected');
        return;
      }
    }

    console.log('Shortest distances:', dist);
  }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 3);
graph.addEdge(2, 3, 3);
graph.addEdge(2, 4, 1);
graph.addEdge(4, 3, -5);

graph.bellmanFordAlgorithm(0);
