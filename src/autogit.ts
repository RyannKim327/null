type Edge = {
  source: number;
  destination: number;
  weight: number;
};

function bellmanFord(edges: Edge[], V: number, source: number): { distances: number[]; hasNegativeCycle: boolean } {
  // Step 1: Initialize distances
  const distances: number[] = Array(V).fill(Infinity);
  distances[source] = 0;

  // Step 2: Relax edges repeatedly (V-1 times)
  for (let i = 0; i < V - 1; i++) {
    for (const edge of edges) {
      const { source: u, destination: v, weight: w } = edge;
      if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
        distances[v] = distances[u] + w;
      }
    }
  }

  // Step 3: Check for negative weight cycles
  let hasNegativeCycle = false;
  for (const edge of edges) {
    const { source: u, destination: v, weight: w } = edge;
    if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
      hasNegativeCycle = true;
      break;
    }
  }

  return { distances, hasNegativeCycle };
}

// Example usage
const edges: Edge[] = [
  { source: 0, destination: 1, weight: -1 },
  { source: 0, destination: 2, weight: 4 },
  { source: 1, destination: 2, weight: 3 },
  { source: 1, destination: 3, weight: 2 },
  { source: 1, destination: 4, weight: 2 },
  { source: 3, destination: 2, weight: 5 },
  { source: 3, destination: 1, weight: 1 },
  { source: 4, destination: 3, weight: -3 },
];

const V = 5; // Number of vertices
const source = 0; // Source vertex

const { distances, hasNegativeCycle } = bellmanFord(edges, V, source);

if (hasNegativeCycle) {
  console.log("Graph contains a negative weight cycle.");
} else {
  console.log("Shortest distances from source vertex:", distances);
}
