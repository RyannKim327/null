interface Edge {
  from: number;
  to: number;
  weight: number;
}

function bellmanFord(
  edges: Edge[],
  vertexCount: number,
  source: number
): { distances: number[]; predecessors: (number | null)[]; hasNegativeCycle: boolean } {
  const distances = Array(vertexCount).fill(Infinity);
  const predecessors = Array(vertexCount).fill(null);

  distances[source] = 0;

  // Relax edges V-1 times
  for (let i = 0; i < vertexCount - 1; i++) {
    let updated = false;

    for (const edge of edges) {
      const { from, to, weight } = edge;

      if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
        distances[to] = distances[from] + weight;
        predecessors[to] = from;
        updated = true;
      }
    }

    // If no update occurs during a full pass, stop early
    if (!updated) break;
  }

  // Check for negative weight cycles
  let hasNegativeCycle = false;

  for (const edge of edges) {
    const { from, to, weight } = edge;

    if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
      hasNegativeCycle = true;
      break;
    }
  }

  return { distances, predecessors, hasNegativeCycle };
}
const edges: Edge[] = [
  { from: 0, to: 1, weight: 4 },
  { from: 0, to: 2, weight: 5 },
  { from: 1, to: 2, weight: -3 },
  { from: 2, to: 3, weight: 4 }
];

const vertexCount = 4;
const source = 0;

const result = bellmanFord(edges, vertexCount, source);

console.log("Distances:", result.distances);
console.log("Predecessors:", result.predecessors);
console.log("Negative Cycle Detected?", result.hasNegativeCycle);
