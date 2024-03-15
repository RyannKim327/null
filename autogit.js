class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.E = []; // Edges
  }

  addEdge(u, v, w) {
    this.E.push([u, v, w]);
  }

  bellmanFord(source) {
    let distance = Array(this.V).fill(Infinity);
    distance[source] = 0;

    for (let i = 0; i < this.V - 1; i++) {
      for (let j = 0; j < this.E.length; j++) {
        let u = this.E[j][0];
        let v = this.E[j][1];
        let weight = this.E[j][2];
        if (distance[u] != Infinity && distance[u] + weight < distance[v]) {
          distance[v] = distance[u] + weight;
        }
      }
    }

    // Check for negative weight cycles
    for (let i = 0; i < this.E.length; i++) {
      let u = this.E[i][0];
      let v = this.E[i][1];
      let weight = this.E[i][2];
      if (distance[u] != Infinity && distance[u] + weight < distance[v]) {
        console.log("Graph contains negative weight cycle");
        return;
      }
    }

    console.log("Shortest distances from source node " + source + ":");
    for (let i = 0; i < this.V; i++) {
      console.log("Node " + i + ": " + distance[i]);
    }
  }
}

// Usage
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

graph.bellmanFord(0);
