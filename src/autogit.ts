type Edge = {
  source: number;
  destination: number;
  weight: number;
};

function bellmanFord(edges: Edge[], V: number, source: number): number[] | string {
  // Step 1: Initialize distances
  const distance: number[] = Array(V).fill(Infinity);
  distance[source] = 0;

  // Step 2: Relax all edges V-1 times
  for (let i = 0; i < V - 1; i++) {
    for (const edge of edges) {
      const { source: u, destination: v, weight: w } = edge;
      if (distance[u] !== Infinity && distance[u] + w < distance[v]) {
        distance[v] = distance[u] + w;
      }
    }
  }

  // Step 3: Check for negative weight cycles
  for (const edge of edges) {
    const { source: u, destination: v, weight: w } = edge;
    if (distance[u] !== Infinity && distance[u] + w < distance[v]) {
      return "Graph contains a negative weight cycle";
    }
  }

  // Step 4: Return the shortest distances
  return distance;
}

// Example Usage
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

const V = 5; // Number of vertices
const source = 0; // Source vertex

const result = bellmanFord(edges, V, source);

if (typeof result === "string") {
  console.log(result); // Negative weight cycle detected
} else {
  console.log("Shortest distances from source:", result);
}
Shortest distances from source: [0, -1, 2, -2, 1]
