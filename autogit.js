class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
  }

  bellmanFord(source) {
    const distances = {};
    const predecessors = {};

    // Step 2: Initialize distances and predecessors
    for (let vertex of this.vertices) {
      distances[vertex] = Infinity;
      predecessors[vertex] = null;
    }
    distances[source] = 0;

    // Step 3: Relax edges iteratively
    for (let i = 1; i < this.vertices.length; i++) {
      for (let j = 0; j < this.edges.length; j++) {
        const { source, destination, weight } = this.edges[j];

        if (distances[source] + weight < distances[destination]) {
          distances[destination] = distances[source] + weight;
          predecessors[destination] = source;
        }
      }
    }

    // Step 4: Check for negative-weight cycles
    for (let j = 0; j < this.edges.length; j++) {
      const { source, destination, weight } = this.edges[j];
      if (distances[source] + weight < distances[destination]) {
        throw new Error("Graph contains a negative-weight cycle");
      }
    }

    return { distances, predecessors };
  }
}

// Example usage:
const vertices = ["A", "B", "C", "D", "E"];
const edges = [
  new Edge("A", "B", -1),
  new Edge("A", "C", 4),
  new Edge("B", "C", 3),
  new Edge("B", "D", 2),
  new Edge("B", "E", 2),
  new Edge("D", "B", 1),
  new Edge("D", "C", 5),
  new Edge("E", "D", -3),
];

const graph = new Graph(vertices, edges);
const sourceVertex = "A";
const { distances, predecessors } = graph.bellmanFord(sourceVertex);

console.log("Distances:", distances);
console.log("Predecessors:", predecessors);
