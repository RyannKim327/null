const graph = {
  A: [{ node: 'B', weight: 6 }, { node: 'C', weight: 3 }],
  B: [{ node: 'D', weight: 2 }],
  C: [{ node: 'D', weight: 1 }, { node: 'B', weight: 2 }],
  D: []
};
function initializeDistances(graph, source) {
  const distances = {};
  for (const node in graph) {
    distances[node] = node === source ? 0 : Infinity;
  }
  return distances;
}
function bellmanFord(graph, source) {
  const distances = initializeDistances(graph, source);

  // Relax edges |V - 1| times
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (const node in graph) {
      for (const { node: neighbor, weight } of graph[node]) {
        const distanceToNeighbor = distances[node] + weight;
        if (distanceToNeighbor < distances[neighbor]) {
          distances[neighbor] = distanceToNeighbor;
        }
      }
    }
  }

  // Check for negative cycles
  for (const node in graph) {
    for (const { node: neighbor, weight } of graph[node]) {
      if (distances[node] + weight < distances[neighbor]) {
        throw new Error('Graph contains a negative-weight cycle');
      }
    }
  }

  return distances;
}
const sourceNode = 'A';
const shortestDistances = bellmanFord(graph, sourceNode);
console.log(shortestDistances);
