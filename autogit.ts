type Edge = {
  from: number;
  to: number;
  weight: number;
};

function bellmanFord(
  verticesCount: number,
  edges: Edge[],
  source: number
): { distances: number[]; predecessors: (number | null)[] | null } {
  // Initialize distances array: start with Infinity
  const distances = new Array(verticesCount).fill(Infinity);
  // For path reconstruction
  const predecessors = new Array(verticesCount).fill(null);

  distances[source] = 0; // Distance from source to itself is 0

  // Relax all edges |V| - 1 times
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
    // If no update occurred, no need to continue
    if (!updated) break;
  }

  // Check for negative weight cycles
  for (const edge of edges) {
    const { from, to, weight } = edge;
    if (distances[from] !== Infinity && distances[from] + weight < distances[to]) {
      // Negative cycle detected, no solution
      return { distances: [], predecessors: null };
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

const verticesCount = 4;
const source = 0;

const result = bellmanFord(verticesCount, edges, source);

if (result.predecessors === null) {
  console.log("Graph contains a negative weight cycle");
} else {
  console.log("Distances from source:", result.distances);
  console.log("Predecessors for each vertex:", result.predecessors);
}
