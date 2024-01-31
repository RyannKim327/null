const graph = {
  0: { 1: 4, 2: 6 },
  1: { 3: 5, 4: -2 },
  2: { 5: -4 },
  3: { 2: -1 },
  4: { 3: 1, 5: 4 },
  5: {}
};
function initializeDistances(graph, source) {
  const distances = {};
  for (let vertex in graph) {
    distances[vertex] = vertex == source ? 0 : Infinity;
  }
  return distances;
}
function bellmanFord(graph, source) {
  const distances = initializeDistances(graph, source);

  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let vertex in graph) {
      for (let neighbor in graph[vertex]) {
        const weight = graph[vertex][neighbor];
        if (distances[vertex] != Infinity && distances[vertex] + weight < distances[neighbor]) {
          distances[neighbor] = distances[vertex] + weight;
        }
      }
    }
  }

  // Check for negative cycles
  for (let vertex in graph) {
    for (let neighbor in graph[vertex]) {
      const weight = graph[vertex][neighbor];
      if (distances[vertex] != Infinity && distances[vertex] + weight < distances[neighbor]) {
        throw new Error('Negative cycle detected');
      }
    }
  }

  return distances;
}
const source = 0;
const shortestDistances = bellmanFord(graph, source);
console.log(shortestDistances);
