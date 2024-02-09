class Graph {
  constructor(numVertices, edges) {
    this.numVertices = numVertices;
    this.edges = edges;
  }

  bellmanFord(source) {
    let dist = new Array(this.numVertices).fill(Infinity);
    let prev = new Array(this.numVertices).fill(null);

    dist[source] = 0;

    for (let i = 0; i < this.numVertices - 1; i++) {
      for (let [u, v, weight] of this.edges) {
        if (dist[u] + weight < dist[v]) {
          dist[v] = dist[u] + weight;
          prev[v] = u;
        }
      }
    }

    // Check for negative cycles
    for (let [u, v, weight] of this.edges) {
      if (dist[u] + weight < dist[v]) {
        throw new Error("Graph contains a negative cycle");
      }
    }

    return { dist, prev };
  }
}

// Example usage
const numVertices = 4;
const edges = [
  [0, 1, 1],
  [0, 2, 4],
  [1, 2, 2],
  [1, 3, 5],
  [2, 3, 1],
];
const graph = new Graph(numVertices, edges);

const source = 0;
const { dist, prev } = graph.bellmanFord(source);

console.log("Shortest distances:", dist);
console.log("Predecessors:", prev);
