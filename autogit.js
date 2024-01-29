const graph = {
  A: [{ node: 'B', weight: 4 }, { node: 'C', weight: 2 }],
  B: [{ node: 'D', weight: 3 }],
  C: [{ node: 'B', weight: 1 }, { node: 'D', weight: 4 }],
  D: [{ node: 'E', weight: 2 }],
  E: []
};
function bellmanFord(graph, start) {
  const distances = {};
  const previous = {};

  // Step 1: Initialize distances and previous
  for (const vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
  }
  distances[start] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (const vertex in graph) {
      for (const { node, weight } of graph[vertex]) {
        if (distances[vertex] + weight < distances[node]) {
          distances[node] = distances[vertex] + weight;
          previous[node] = vertex;
        }
      }
    }
  }

  // Step 3: Check for negative cycles
  for (const vertex in graph) {
    for (const { node, weight } of graph[vertex]) {
      if (distances[vertex] + weight < distances[node]) {
        throw new Error('Graph contains negative cycle');
      }
    }
  }

  return { distances, previous };
}
const start = 'A';
const result = bellmanFord(graph, start);

console.log('Shortest distances:', result.distances);
console.log('Previous nodes:', result.previous);
