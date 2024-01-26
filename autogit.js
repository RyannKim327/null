function bellmanFord(graph, start) {
  const vertices = Object.keys(graph);
  const distances = {};
  const predecessors = {};

  // Step 2: Initialization
  for (const vertex of vertices) {
    distances[vertex] = Infinity;
    predecessors[vertex] = null;
  }
  distances[start] = 0;

  // Step 3: Relaxation
  for (let i = 0; i < vertices.length - 1; i++) {
    for (const [source, edges] of Object.entries(graph)) {
      for (const [target, weight] of Object.entries(edges)) {
        const distance = distances[source] + weight;
        if (distance < distances[target]) {
          distances[target] = distance;
          predecessors[target] = source;
        }
      }
    }
  }

  // Step 4: Check for negative weight cycles
  for (const [source, edges] of Object.entries(graph)) {
    for (const [target, weight] of Object.entries(edges)) {
      const distance = distances[source] + weight;
      if (distance < distances[target]) {
        return null; // Negative weight cycle detected
      }
    }
  }

  // Step 5: Return the shortest distances and predecessors
  return {
    distances,
    predecessors,
  };
}

// Example usage:
const graph = {
  A: { B: 3, C: 5 },
  B: { C: 1 },
  C: { A: -2 },
};

const result = bellmanFord(graph, "A");
console.log(result);
