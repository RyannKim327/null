interface Edge {
  from: number;
  to: number;
  weight: number;
}

// Bellman-Ford function
function bellmanFord(
  verticesCount: number,
  edges: Edge[],
  source: number
): { distances: number[]; predecessors: (number | null)[] } | null {
  const distances = new Array(verticesCount).fill(Infinity);
  const predecessors = new Array(verticesCount).fill(null);

  distances[source] = 0;

  // Relax edges up to |V| - 1 times
  for (let i = 0; i < verticesCount - 1; i++) {
    let updated = false;
    for (const edge of edges) {
      const { from, to, weight } = edge;
      if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
        distances[to] = distances[from] + weight;
        predecessors[to] = from;
        updated = true;
      }
    }

    // Early stop if no update
    if (!updated) break;
  }

  // Check for negative-weight cycles
  for (const edge of edges) {
    const { from, to, weight } = edge;
    if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
      // Negative cycle detected
      return null;
    }
  }

  return { distances, predecessors };
}

// Example usage:
const edges: Edge[] = [
  { from: 0, to: 1, weight: 4 },
  { from: 0, to: 2, weight: 5 },
  { from: 1, to: 2, weight: -3 },
  { from: 2, to: 3, weight: 4 },
];

const result = bellmanFord(4, edges, 0);
if (result) {
  console.log("Distances:", result.distances);
  console.log("Predecessors:", result.predecessors);
} else {
  console.log("Negative cycle detected!");
}
