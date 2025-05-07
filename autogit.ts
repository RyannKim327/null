interface Edge {
  source: number;
  target: number;
  weight: number;
}

function bellmanFord(
  verticesCount: number,
  edges: Edge[],
  source: number
): { distances: number[]; predecessor: (number | null)[] } | null {
  // Initialize distances and predecessors
  const distances = new Array(verticesCount).fill(Infinity);
  const predecessor = new Array(verticesCount).fill(null);

  distances[source] = 0;

  // Relax edges repeatedly
  for (let i = 0; i < verticesCount - 1; i++) {
    let anyUpdate = false;
    for (const edge of edges) {
      if (distances[edge.source] + edge.weight < distances[edge.target]) {
        distances[edge.target] = distances[edge.source] + edge.weight;
        predecessor[edge.target] = edge.source;
        anyUpdate = true;
      }
    }
    // Early stop if no update in this iteration
    if (!anyUpdate) break;
  }

  // Check for negative-weight cycles
  for (const edge of edges) {
    if (distances[edge.source] + edge.weight < distances[edge.target]) {
      console.error("Graph contains a negative-weight cycle");
      return null; // or throw an error if you prefer
    }
  }

  return { distances, predecessor };
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
  { source: 4, target: 0, weight: 2 },
  { source: 4, target: 3, weight: 7 },
];

const result = bellmanFord(5, edges, 0);

if (result) {
  console.log("Distances:", result.distances);
  console.log("Predecessors:", result.predecessor);
}
