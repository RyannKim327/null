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
  // Initialize distances with Infinity, except source = 0
  const distances = Array(verticesCount).fill(Infinity);
  const predecessors = Array(verticesCount).fill(null);
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
    // Early stop if no update in this iteration
    if (!updated) break;
  }

  // Check for negative-weight cycles
  for (const edge of edges) {
    if (
      distances[edge.from] !== Infinity &&
      distances[edge.from] + edge.weight < distances[edge.to]
    ) {
      // Negative cycle detected; no solution exists
      return { distances, predecessors: null };
    }
  }

  return { distances, predecessors };
}

// Example usage
const edges: Edge[] = [
  { from: 0, to: 1, weight: 5 },
  { from: 0, to: 2, weight: 4 },
  { from: 1, to: 3, weight: 3 },
  { from: 2, to: 1, weight: 6 },
  { from: 3, to: 2, weight: -2 },
];

const { distances, predecessors } = bellmanFord(4, edges, 0);

console.log("Distances:", distances); 
// Distances array: shortest distance from source to each vertex

if (predecessors) {
  // Function to reconstruct path from source to target
  function getPath(target: number): number[] {
    const path: number[] = [];
    for (let at = target; at !== null; at = predecessors[at]) {
      path.push(at);
    }
    return path.reverse();
  }

  console.log("Path to vertex 3:", getPath(3));
} else {
  console.log("Negative weight cycle detected. No solution.");
}
