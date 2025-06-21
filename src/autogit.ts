// Define the structure for an edge
interface Edge {
  source: number;
  destination: number;
  weight: number;
}

/**
 * Bellman-Ford Algorithm to find shortest paths from a source vertex.
 * @param vertices - Total number of vertices in the graph.
 * @param edges - Array of edges in the graph.
 * @param source - The source vertex.
 * @returns An array of distances from the source to all vertices, or null if a negative weight cycle is detected.
 */
function bellmanFord(vertices: number, edges: Edge[], source: number): number[] | null {
  // Step 1: Initialize distances
  const distances: number[] = new Array(vertices).fill(Infinity);
  distances[source] = 0;

  // Step 2: Relax all edges (V-1) times
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
      console.error("Graph contains a negative weight cycle");
      return null; // Negative weight cycle detected
    }
  }

  return distances;
}

// Example Usage
const vertices = 5; // Number of vertices
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

const sourceVertex = 0;
const result = bellmanFord(vertices, edges, sourceVertex);

if (result) {
  console.log("Shortest distances from vertex", sourceVertex, ":", result);
} else {
  console.log("Negative weight cycle detected.");
}
Shortest distances from vertex 0 : [ 0, -1, 2, -2, 1 ]
Graph contains a negative weight cycle
Negative weight cycle detected.
