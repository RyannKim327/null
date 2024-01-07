const graph = {
  A: [{ node: 'B', weight: -1 }, { node: 'C', weight: 4 }],
  B: [{ node: 'C', weight: 3 }, { node: 'D', weight: 2 }, { node: 'E', weight: 2 }],
  C: [],
  D: [{ node: 'B', weight: 1 }, { node: 'C', weight: 5 }],
  E: [{ node: 'D', weight: -3 }]
};
function bellmanFord(graph, source) {
  // Step 1: Initialization
  const distances = {};
  const vertices = Object.keys(graph);

  for (let vertex of vertices) {
    distances[vertex] = vertex === source ? 0 : Infinity;
  }

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < vertices.length - 1; i++) {
    for (let vertex of vertices) {
      for (let { node, weight } of graph[vertex]) {
        if (distances[vertex] + weight < distances[node]) {
          distances[node] = distances[vertex] + weight;
        }
      }
    }
  }

  // Step 3: Check for negative cycles
  for (let vertex of vertices) {
    for (let { node, weight } of graph[vertex]) {
      if (distances[vertex] + weight < distances[node]) {
        throw new Error('Graph contains a negative-weight cycle');
      }
    }
  }

  return distances;
}
const source = 'A';
const shortestDistances = bellmanFord(graph, source);
console.log(shortestDistances);
