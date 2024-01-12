class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  addEdge(src, dest, weight) {
    this.edges[src].push({ dest, weight });
  }
}
function bellmanFord(graph, startVertex) {
  const distance = {};
  const predecessor = {};

  // Step 1: Initialize distances and predecessors
  graph.vertices.forEach(vertex => {
    distance[vertex] = Infinity;
    predecessor[vertex] = null;
  });
  distance[startVertex] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 1; i < graph.vertices.length; i++) {
    graph.vertices.forEach(vertex => {
      graph.edges[vertex].forEach(edge => {
        const { dest, weight } = edge;
        if (distance[vertex] + weight < distance[dest]) {
          distance[dest] = distance[vertex] + weight;
          predecessor[dest] = vertex;
        }
      });
    });
  }

  // Step 3: Check for negative-weight cycles
  graph.vertices.forEach(vertex => {
    graph.edges[vertex].forEach(edge => {
      const { dest, weight } = edge;
      if (distance[vertex] + weight < distance[dest]) {
        console.log("Graph contains negative-weight cycle");
        return;
      }
    });
  });

  return { distance, predecessor };
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B", 5);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "D", 4);
graph.addEdge("C", "B", -6);
graph.addEdge("C", "D", 1);
const startVertex = "A";
const result = bellmanFord(graph, startVertex);
console.log(result.distance);
console.log(result.predecessor);
