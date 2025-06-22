type Edge = {
  source: number;
  destination: number;
  weight: number;
};
function bellmanFord(vertices: number, edges: Edge[], source: number): number[] {
  // Step 1: Initialize distances
  const distances: number[] = Array(vertices).fill(Infinity);
  distances[source] = 0;

  // Step 2: Relax edges repeatedly (vertices - 1 times)
  for (let i = 0; i < vertices - 1; i++) {
    for (const edge of edges) {
      const { source: u, destination: v, weight: w } = edge;
      if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
        distances[v] = distances[u] + w;
      }
    }
  }

  // Step 3: Check for negative weight cycles
  for (const edge of edges) {
    const { source: u, destination: v, weight: w } = edge;
    if (distances[u] !== Infinity && distances[u] + w < distances[v]) {
      throw new Error("Graph contains a negative weight cycle");
    }
  }

  return distances;
}
// Define the graph as a list of edges
const edges: Edge[] = [
  { source: 0, destination: 1, weight: 4 },
  { source: 0, destination: 2, weight: 3 },
  { source: 1, destination: 2, weight: -2 },
  { source: 2, destination: 3, weight: 2 },
  { source: 3, destination: 1, weight: 1 },
];

const vertices = 4; // Number of vertices in the graph
const source = 0;   // Starting vertex

try {
  const distances = bellmanFord(vertices, edges, source);
  console.log("Shortest distances from source:", distances);
} catch (error) {
  console.error(error.message);
}
