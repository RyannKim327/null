interface Edge {
  from: number;
  to: number;
  weight: number;
}

function bellmanFord(
  verticesCount: number,
  edges: Edge[],
  source: number
): { distances: number[]; hasNegativeCycle: boolean } {
  const distances = new Array(verticesCount).fill(Infinity);
  distances[source] = 0;

  // Relax edges repeatedly
  for (let i = 0; i < verticesCount - 1; i++) {
    let updated = false;

    for (const edge of edges) {
      if (distances[edge.from] + edge.weight < distances[edge.to]) {
        distances[edge.to] = distances[edge.from] + edge.weight;
        updated = true;
      }
    }

    // Optimization: stop if no update in this iteration
    if (!updated) break;
  }

  // Check for negative cycles
  let hasNegativeCycle = false;
  for (const edge of edges) {
    if (distances[edge.from] + edge.weight < distances[edge.to]) {
      hasNegativeCycle = true;
      break;
    }
  }

  return { distances, hasNegativeCycle };
}
const edges: Edge[] = [
  { from: 0, to: 1, weight: 5 },
  { from: 0, to: 2, weight: 4 },
  { from: 1, to: 3, weight: 3 },
  { from: 2, to: 1, weight: 6 },
  { from: 3, to: 2, weight: -2 }
];

const result = bellmanFord(4, edges, 0);
console.log('Distances:', result.distances);
console.log('Negative cycle detected:', result.hasNegativeCycle);
