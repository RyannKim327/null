type Edge = {
  source: number;
  target: number;
  weight: number;
};

function bellmanFord(edges: Edge[], V: number, source: number): { distances: number[]; hasNegativeCycle: boolean } {
  // Step 1: Initialize distances
  const distances: number[] = Array(V).fill(Infinity);
  distances[source] = 0;

  // Step 2: Relax edges repeatedly (V-1 times)
  for (let i = 0; i < V - 1; i++) {
    for (const edge of edges) {
      const { source: u, target: v, weight: w } = edge;
      if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
        distances[v] = distances[u] + w;
      }
    }
  }

  // Step 3: Check for negative weight cycles
  let hasNegativeCycle = false;
  for (const edge of edges) {
    const { source: u, target: v, weight: w } = edge;
    if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
      hasNegativeCycle = true;
      break;
    }
  }

  return { distances, hasNegativeCycle };
}

// Example usage
const edges: Edge[] = [
  { source: 0, target: 1, weight: 4 },
  { source: 0, target: 2, weight: 3 },
  { source: 1, target: 2, weight: -2 },
  { source: 2, target: 3, weight: 2 },
  { source: 3, target: 1, weight: 1 },
];

const V = 4; // Number of vertices
const source = 0; // Source vertex

const result = bellmanFord(edges, V, source);
console.log("Distances:", result.distances);
console.log("Has Negative Cycle:", result.hasNegativeCycle);
Edges:
0 -> 1 (weight 4)
0 -> 2 (weight 3)
1 -> 2 (weight -2)
2 -> 3 (weight 2)
3 -> 1 (weight 1)

Source: 0
Distances: [ 0, 2, 0, 2 ]
Has Negative Cycle: false
