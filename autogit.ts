type Edge = {
  from: number;
  to: number;
  weight: number;
};

function bellmanFord(
  verticesCount: number,
  edges: Edge[],
  source: number
): { distances: number[]; hasNegativeCycle: boolean } {
  // Step 1: Initialize distances array with Infinity for all vertices except the source.
  const distances = Array(verticesCount).fill(Infinity);
  distances[source] = 0;

  // Step 2: Relax edges repeatedly (|V| - 1 times)
  for (let i = 0; i < verticesCount - 1; i++) {
    let updated = false;
    for (const edge of edges) {
      if (
        distances[edge.from] !== Infinity &&
        distances[edge.from] + edge.weight < distances[edge.to]
      ) {
        distances[edge.to] = distances[edge.from] + edge.weight;
        updated = true;
      }
    }
    // Optimization: If no update happened in this pass, we can stop early.
    if (!updated) break;
  }

  // Step 3: Check for negative-weight cycles
  for (const edge of edges) {
    if (
      distances[edge.from] !== Infinity &&
      distances[edge.from] + edge.weight < distances[edge.to]
    ) {
      return { distances, hasNegativeCycle: true };
    }
  }

  return { distances, hasNegativeCycle: false };
}
const edges: Edge[] = [
  { from: 0, to: 1, weight: 5 },
  { from: 0, to: 2, weight: 4 },
  { from: 1, to: 3, weight: 3 },
  { from: 2, to: 1, weight: 6 },
  { from: 3, to: 2, weight: -2 }
];

const verticesCount = 4;
const source = 0;

const result = bellmanFord(verticesCount, edges, source);

if (result.hasNegativeCycle) {
  console.log("Graph contains a negative weight cycle");
} else {
  console.log("Shortest distances from source:", result.distances);
}
