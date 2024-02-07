function bellmanFord(graph, source) {
  // Step 1: Initialization
  const nodes = Object.keys(graph);
  const distances = {};

  for (let node of nodes) {
    distances[node] = Infinity;
  }
  distances[source] = 0;

  // Step 2: Relaxation
  for (let i = 0; i < nodes.length - 1; i++) {
    for (let node of nodes) {
      for (let [adjacentNode, weight] of graph[node]) {
        if (distances[node] + weight < distances[adjacentNode]) {
          distances[adjacentNode] = distances[node] + weight;
        }
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let node of nodes) {
    for (let [adjacentNode, weight] of graph[node]) {
      if (distances[node] + weight < distances[adjacentNode]) {
        throw new Error("Graph contains a negative-weight cycle");
      }
    }
  }

  return distances;
}
const graph = {
  A: [["B", 4], ["C", 2]],
  B: [["D", 3]],
  C: [["B", 1], ["D", 5]],
  D: []
};

const source = "A";
const distances = bellmanFord(graph, source);
console.log(distances);
