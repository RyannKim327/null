function bellmanFord(graph, source, vertices) {
  // Step 1: Initialize distances and set source distance to 0
  let distances = {};
  for (let i = 1; i <= vertices; i++) {
    distances[i] = i === source ? 0 : Infinity;
  }

  // Step 2: Relax edges repeatedly
  for (let i = 1; i <= vertices - 1; i++) {
    for (let [src, dest, weight] of graph) {
      if (distances[src] + weight < distances[dest]) {
        distances[dest] = distances[src] + weight;
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let [src, dest, weight] of graph) {
    if (distances[src] + weight < distances[dest]) {
      throw new Error("Graph contains negative-weight cycle");
    }
  }

  // Step 4: Return the distances
  return distances;
}
let graph = [
  [1, 2, 4],
  [1, 3, 2],
  [2, 3, 1],
  [3, 2, -3],
  [3, 4, 5],
];
let source = 1;
let numVertices = 4;

let distances = bellmanFord(graph, source, numVertices);

console.log(distances);
