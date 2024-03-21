class Graph {
  constructor(vertices, edges) {
    this.vertices = vertices;
    this.edges = edges;
  }

  bellmanFord(source) {
    let distances = {};
  
    // Initialize distances from source to all other vertices as Infinity
    for (let vertex of this.vertices) {
      distances[vertex] = Infinity;
    }
  
    distances[source] = 0;
  
    // Relax all edges |V| - 1 times
    for (let i = 0; i < this.vertices.length - 1; i++) {
      for (let [start, end, weight] of this.edges) {
        if (distances[start] + weight < distances[end]) {
          distances[end] = distances[start] + weight;
        }
      }
    }
  
    // Check for negative weight cycles
    for (let [start, end, weight] of this.edges) {
      if (distances[start] + weight < distances[end]) {
        console.log("Graph contains negative weight cycle");
        return;
      }
    }
  
    return distances;
  }
}

// Example usage:
let vertices = ["A", "B", "C", "D", "E"];
let edges = [
  ["A", "C", 3],
  ["A", "D", 2],
  ["B", "A", 2],
  ["B", "C", 4],
  ["C", "D", 1],
  ["D", "E", 3],
  ["E", "B", -5]
];

let graph = new Graph(vertices, edges);
let shortestDistances = graph.bellmanFord("A");

console.log(shortestDistances);
