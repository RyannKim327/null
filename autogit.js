class Edge {
  constructor(start, end, cost) {
    this.start = start;
    this.end = end;
    this.cost = cost;
  }
}

function bellmanFord(graph, source) {
  let distances = {};
  let vertices = Object.keys(graph);

  // Initialize distances
  for (let vertex of vertices) {
    distances[vertex] = Infinity;
  }
  distances[source] = 0;

  // Relax edges repeatedly
  for (let i = 0; i < vertices.length - 1; i++) {
    for (let vertex of vertices) {
      for (let edge of graph[vertex]) {
        if (distances[vertex] + edge.cost < distances[edge.end]) {
           distances[edge.end] = distances[vertex] + edge.cost;
        }
      }
    }
  }

  // Check for negative-weight cycles
  for (let vertex of vertices) {
    for (let edge of graph[vertex]) {
      if (distances[vertex] + edge.cost < distances[edge.end]) {
         return "Graph contains negative-weight cycles";
      }
    }
  }

  return distances;
}

// Example usage
let graph = {
  A: [new Edge("A", "B", -1), new Edge("A", "C", 4)],
  B: [new Edge("B", "C", 3), new Edge("B", "D", 2), new Edge("B", "E", 2)],
  C: [],
  D: [new Edge("D", "B", 1), new Edge("D", "C", 5)],
  E: [new Edge("E", "D", -3)]
};

let shortestPaths = bellmanFord(graph, "A");
console.log(shortestPaths);
