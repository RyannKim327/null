// Represents the graph as an adjacency list
class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.edges = [];
  }

  addEdge(src, dest, weight) {
    this.edges.push([src, dest, weight]);
  }
}

// Calculates the shortest paths from a given source vertex
function bellmanFord(graph, src) {
  // Step 1: Initialize distances from source to all other vertices as infinite
  let distances = new Array(graph.numOfVertices);
  for (let i = 0; i < graph.numOfVertices; i++) {
    distances[i] = Infinity;
  }
  distances[src] = 0;

  // Step 2: Relax all edges |V| - 1 times
  for (let i = 1; i <= graph.numOfVertices - 1; i++) {
    for (let [src, dest, weight] of graph.edges) {
      if (distances[src] + weight < distances[dest]) {
        distances[dest] = distances[src] + weight;
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let [src, dest, weight] of graph.edges) {
    if (distances[src] + weight < distances[dest]) {
      throw new Error("Graph contains a negative-weight cycle");
    }
  }

  return distances;
}

// Example usage:
let graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

let src = 0;
let distances = bellmanFord(graph, src);
console.log("Shortest distances from source:", distances);
