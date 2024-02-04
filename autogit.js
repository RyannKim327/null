function bellmanFord(graph, source) {
  const distances = {};
  const previous = {};

  // Step 2: Initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[source] = 0;

  // Step 3: Relax edges repeatedly
  const nodes = Object.keys(graph);
  const numNodes = nodes.length;
  for (let i = 1; i <= numNodes - 1; i++) {
    for (let j = 0; j < nodes.length; j++) {
      const node = nodes[j];
      const edges = graph[node];
      for (const [neighbor, weight] of Object.entries(edges)) {
        const totalWeight = distances[node] + weight;
        if (totalWeight < distances[neighbor]) {
          distances[neighbor] = totalWeight;
          previous[neighbor] = node;
        }
      }
    }
  }

  // Step 4: Check for negative cycles
  for (let j = 0; j < nodes.length; j++) {
    const node = nodes[j];
    const edges = graph[node];
    for (const [neighbor, weight] of Object.entries(edges)) {
      if (distances[node] + weight < distances[neighbor]) {
        throw new Error('Negative cycle found');
      }
    }
  }

  return { distances, previous };
}

// Example usage:
const graph = {
  A: { B: 3, C: 5 },
  B: { C: -2 },
  C: { D: 4, E: 1 },
  D: {},
  E: { D: -3 },
};

const source = 'A';
const { distances, previous } = bellmanFord(graph, source);
console.log('Distances:', distances);
console.log('Previous:', previous);
