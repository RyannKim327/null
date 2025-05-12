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
  // Step 1: Initialize distances and predecessors
  const distances: number[] = new Array(verticesCount).fill(Infinity);
  const predecessors: (number | null)[] = new Array(verticesCount).fill(null);
  distances[source] = 0;

  // Step 2: Relax edges repeatedly (V-1 times)
  for (let i = 0; i < verticesCount - 1; i++) {
    for (const edge of edges) {
      const { from, to, weight } = edge;
      if (distances[from] + weight < distances[to]) {
        distances[to] = distances[from] + weight;
        predecessors[to] = from;
      }
    }
  }

  // Step 3: Check for negative weight cycles
  for (const edge of edges) {
    if (distances[edge.from] + edge.weight < distances[edge.to]) {
      throw new Error("Graph contains a negative weight cycle");
    }
  }

  return { distances, predecessors };
}
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

try {
  const { distances, predecessors } = bellmanFord(verticesCount, edges, source);
  console.log("Distances from source:", distances);
  console.log("Predecessors:", predecessors);
} catch (e) {
  console.error(e.message);
}
