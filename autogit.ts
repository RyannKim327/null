type Edge = {
  from: number;
  to: number;
  weight: number;
};

function bellmanFord(
  verticesCount: number,
  edges: Edge[],
  source: number
): { distances: number[]; predecessors: (number | null)[] } | null {
  const distances = Array(verticesCount).fill(Infinity);
  const predecessors = Array(verticesCount).fill(null);

  distances[source] = 0;

  // Relax edges repeatedly
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
    if (!updated) break; // Early stop if no update
  }

  // Check for negative weight cycles
  for (const edge of edges) {
    const { from, to, weight } = edge;
    if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
      console.error("Graph contains a negative weight cycle");
      return null; // Negative cycle detected
    }
  }

  return { distances, predecessors };
}

// Example usage:

const edges: Edge[] = [
  { from: 0, to: 1, weight: 6 },
  { from: 0, to: 2, weight: 7 },
  { from: 1, to: 2, weight: 8 },
  { from: 1, to: 3, weight: 5 },
  { from: 1, to: 4, weight: -4 },
  { from: 2, to: 3, weight: -3 },
  { from: 2, to: 4, weight: 9 },
  { from: 3, to: 1, weight: -2 },
  { from: 4, to: 0, weight: 2 },
  { from: 4, to: 3, weight: 7 },
];

const verticesCount = 5;
const source = 0;

const result = bellmanFord(verticesCount, edges, source);

if (result) {
  console.log("Distances: ", result.distances);
  console.log("Predecessors: ", result.predecessors);
}
