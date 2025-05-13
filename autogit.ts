type Edge = {
  source: number;
  target: number;
  weight: number;
};

function bellmanFord(
  edges: Edge[],
  vertexCount: number,
  source: number
): { distances: number[]; predecessors: (number | null)[] } | string {
  const distances = new Array(vertexCount).fill(Infinity);
  const predecessors = new Array(vertexCount).fill(null);

  distances[source] = 0;

  // Relax edges repeatedly
  for (let i = 0; i < vertexCount - 1; i++) {
    for (const edge of edges) {
      const { source: u, target: v, weight } = edge;
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        distances[v] = distances[u] + weight;
        predecessors[v] = u;
      }
    }
  }

  // Check for negative-weight cycles
  for (const edge of edges) {
    const { source: u, target: v, weight } = edge;
    if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
      return "Graph contains a negative weight cycle";
    }
  }

  return { distances, predecessors };
}
const edges: Edge[] = [
  { source: 0, target: 1, weight: 6 },
  { source: 0, target: 2, weight: 7 },
  { source: 1, target: 2, weight: 8 },
  { source: 1, target: 3, weight: 5 },
  { source: 1, target: 4, weight: -4 },
  { source: 2, target: 3, weight: -3 },
  { source: 2, target: 4, weight: 9 },
  { source: 3, target: 1, weight: -2 },
  { source: 4, target: 3, weight: 7 },
];

const vertexCount = 5;
const source = 0;

const result = bellmanFord(edges, vertexCount, source);
console.log(result);
