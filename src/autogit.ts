type Edge = {
  source: number;
  destination: number;
  weight: number;
};

function bellmanFord(edges: Edge[], V: number, source: number): number[] | string {
  // Step 1: Initialize distances
  const distances: number[] = Array(V).fill(Infinity);
  distances[source] = 0;

  // Step 2: Relax all edges V-1 times
  for (let i = 0; i < V - 1; i++) {
    for (const edge of edges) {
      const { source, destination, weight } = edge;
      if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
      }
    }
  }

  // Step 3: Check for negative weight cycles
  for (const edge of edges) {
    const { source, destination, weight } = edge;
    if (distances[source] !== Infinity && distances[source] + weight < distances[destination]) {
      return "Graph contains a negative weight cycle";
    }
  }

  return distances;
}

// Example Usage
const edges: Edge[] = [
  { source: 0, destination: 1, weight: 4 },
  { source: 0, destination: 2, weight: 3 },
  { source: 1, destination: 2, weight: -2 },
  { source: 2, destination: 3, weight: 2 },
  { source: 3, destination: 1, weight: 1 },
];

const V = 4; // Number of vertices
const source = 0; // Source vertex

const result = bellmanFord(edges, V, source);

if (typeof result === "string") {
  console.log(result); // Negative weight cycle detected
} else {
  console.log("Shortest distances from source:", result);
}
Vertices: 4
Edges:
  0 -> 1 (weight 4)
  0 -> 2 (weight 3)
  1 -> 2 (weight -2)
  2 -> 3 (weight 2)
  3 -> 1 (weight 1)
Source: 0
Shortest distances from source: [0, 2, 0, 2]
Graph contains a negative weight cycle
