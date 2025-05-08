interface Edge {
  from: number;
  to: number;
  weight: number;
}

function bellmanFord(
  vertices: number, // number of vertices in the graph
  edges: Edge[],    // list of edges
  source: number    // starting vertex
): { distances: number[]; hasNegativeCycle: boolean } {
  // Initialize distance array with Infinity except for the source
  const distances = new Array(vertices).fill(Infinity);
  distances[source] = 0;

  // Relax edges |V|-1 times
  for (let i = 0; i < vertices - 1; i++) {
    let updated = false;
    for (const edge of edges) {
      if (distances[edge.from] + edge.weight < distances[edge.to]) {
        distances[edge.to] = distances[edge.from] + edge.weight;
        updated = true;
      }
    }
    if (!updated) break; // Early stop if no improvement
  }

  // Check for negative weight cycles
  for (const edge of edges) {
    if (distances[edge.from] + edge.weight < distances[edge.to]) {
      return { distances, hasNegativeCycle: true };
    }
  }

  return { distances, hasNegativeCycle: false };
}
const edges: Edge[] = [
  { from: 0, to: 1, weight: 4 },
  { from: 0, to: 2, weight: 5 },
  { from: 1, to: 2, weight: -3 },
  { from: 2, to: 3, weight: 4 },
];

const result = bellmanFord(4, edges, 0);

if (result.hasNegativeCycle) {
  console.log("Graph contains a negative weight cycle.");
} else {
  console.log("Shortest distances from source:", result.distances);
}
