type Edge = {
  from: number;
  to: number;
  weight: number;
};

function bellmanFord(
  verticesCount: number,
  edges: Edge[],
  source: number
): { distances: number[]; predecessors: (number | null)[] } {
  // Initialize distance array
  const distances = new Array<number>(verticesCount).fill(Infinity);
  const predecessors = new Array<number | null>(verticesCount).fill(null);

  distances[source] = 0;

  // Relax edges repeatedly
  for (let i = 0; i < verticesCount - 1; i++) {
    let updated = false;

    for (const edge of edges) {
      if (
        distances[edge.from] !== Infinity &&
        distances[edge.from] + edge.weight < distances[edge.to]
      ) {
        distances[edge.to] = distances[edge.from] + edge.weight;
        predecessors[edge.to] = edge.from;
        updated = true;
      }
    }

    // Optimization: stop early if no updates (no changes in this iteration)
    if (!updated) break;
  }

  // Check for negative weight cycles
  for (const edge of edges) {
    if (
      distances[edge.from] !== Infinity &&
      distances[edge.from] + edge.weight < distances[edge.to]
    ) {
      throw new Error("Graph contains a negative weight cycle");
    }
  }

  return { distances, predecessors };
}
const edges: Edge[] = [
  { from: 0, to: 1, weight: 5 },
  { from: 0, to: 2, weight: 3 },
  { from: 1, to: 2, weight: -2 },
  { from: 2, to: 3, weight: 4 },
  // Add your edges here
];

const result = bellmanFord(4, edges, 0);
console.log("Distances from source:", result.distances);
console.log("Predecessors:", result.predecessors);
