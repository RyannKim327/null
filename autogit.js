class Graph {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
    this.distance = new Array(vertices);
    this.predecessor = new Array(vertices);
  }

  bellmanFord(source) {
    // Step 1: Initialize distances and predecessors
    for (let i = 0; i < this.vertices; i++) {
      this.distance[i] = Infinity;
      this.predecessor[i] = null;
    }
    this.distance[source] = 0;

    // Step 2: Relax edges repeatedly
    for (let i = 0; i < this.vertices - 1; i++) {
      for (let j = 0; j < this.edges.length; j++) {
        const { u, v, weight } = this.edges[j];
        if (this.distance[u] !== Infinity && this.distance[u] + weight < this.distance[v]) {
          this.distance[v] = this.distance[u] + weight;
          this.predecessor[v] = u;
        }
      }
    }

    // Step 3: Check for negative-weight cycles
    for (let i = 0; i < this.edges.length; i++) {
      const { u, v, weight } = this.edges[i];
      if (this.distance[u] !== Infinity && this.distance[u] + weight < this.distance[v]) {
        console.log("Graph contains negative-weight cycle");
        return;
      }
    }

    // Print the shortest paths
    this.printShortestPaths(source);
  }

  printShortestPaths(source) {
    console.log("Vertex\tDistance\tPath");
    for (let i = 0; i < this.vertices; i++) {
      let path = [];
      let current = i;
      while (current !== source) {
        path.push(current);
        current = this.predecessor[current];
      }
      path.push(source);
      path.reverse();
      if (this.distance[i] === Infinity) {
        console.log(`${i}\tInfinity\t${path}`);
      } else {
        console.log(`${i}\t${this.distance[i]}\t\t${path}`);
      }
    }
  }
}

// Example usage
const vertices = 5;
const edges = [
  { u: 0, v: 1, weight: 6 },
  { u: 0, v: 3, weight: 7 },
  { u: 1, v: 2, weight: 5 },
  { u: 1, v: 3, weight: 8 },
  { u: 1, v: 4, weight: -4 },
  { u: 2, v: 1, weight: -2 },
  { u: 3, v: 2, weight: -3 },
  { u: 3, v: 4, weight: 9 },
  { u: 4, v: 0, weight: 2 },
  { u: 4, v: 2, weight: 7 }
];

const graph = new Graph(vertices, edges);
graph.bellmanFord(0);
