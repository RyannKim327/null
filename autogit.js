class Graph {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
  }

  bellmanFord(source) {
    const distance = Array(this.vertices).fill(Infinity);
    distance[source] = 0;

    for (let i = 0; i < this.vertices - 1; i++) {
      for (let j = 0; j < this.edges.length; j++) {
        const { source, destination, weight } = this.edges[j];
        if (distance[source] + weight < distance[destination]) {
          distance[destination] = distance[source] + weight;
        }
      }
    }

    for (let i = 0; i < this.edges.length; i++) {
      const { source, destination, weight } = this.edges[i];
      if (distance[source] + weight < distance[destination]) {
        throw new Error('Graph contains negative cycles');
      }
    }

    return distance;
  }
}

// Example usage:
const vertices = 5;
const edges = [
  { source: 0, destination: 1, weight: 6 },
  { source: 0, destination: 3, weight: 7 },
  { source: 1, destination: 2, weight: 5 },
  { source: 1, destination: 3, weight: 8 },
  { source: 1, destination: 4, weight: -4 },
  { source: 2, destination: 1, weight: -2 },
  { source: 3, destination: 2, weight: -3 },
  { source: 3, destination: 4, weight: 9 },
  { source: 4, destination: 0, weight: 2 },
  { source: 4, destination: 2, weight: 7 },
];

const graph = new Graph(vertices, edges);
const sourceVertex = 0;
const shortestPaths = graph.bellmanFord(sourceVertex);
console.log(shortestPaths);
