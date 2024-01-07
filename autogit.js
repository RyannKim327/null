const graph = {
  vertices: [],
  edges: []
};
const distance = {};
const predecessor = {};
function bellmanFord(source) {
  // Step 1: Initialize the distance and predecessor arrays
  for (let vertex of graph.vertices) {
    distance[vertex] = Infinity;
    predecessor[vertex] = null;
  }
  distance[source] = 0;

  // Step 2: Relax each edge repeatedly
  for (let i = 1; i < graph.vertices.length; i++) {
    for (let { source, destination, weight } of graph.edges) {
      if (distance[source] !== Infinity && distance[source] + weight < distance[destination]) {
        distance[destination] = distance[source] + weight;
        predecessor[destination] = source;
      }
    }
  }

  // Step 3: Check for negative weight cycles
  for (let { source, destination, weight } of graph.edges) {
    if (distance[source] + weight < distance[destination]) {
      throw new Error("Graph contains negative weight cycle");
    }
  }

  // Step 4: Return the distance and predecessor arrays
  return { distance, predecessor };
}
// Define the graph
graph.vertices = ["A", "B", "C", "D", "E"];
graph.edges = [
  { source: "A", destination: "B", weight: 4 },
  { source: "A", destination: "C", weight: 2 },
  { source: "B", destination: "C", weight: 3 },
  { source: "B", destination: "D", weight: 2 },
  { source: "B", destination: "E", weight: 3 },
  { source: "D", destination: "B", weight: 1 },
  { source: "D", destination: "C", weight: 5 },
  { source: "E", destination: "D", weight: 1 }
];

// Run the Bellman-Ford algorithm
const sourceVertex = "A";
const result = bellmanFord(sourceVertex);
console.log("Distance from source vertex:", result.distance);
console.log("Predecessor vertices:", result.predecessor);
