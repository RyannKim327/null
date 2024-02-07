function bellmanFord(graph, source) {
  const vertices = Object.keys(graph);
  const distances = {};

  // Step 1: Initialize distances array
  vertices.forEach((vertex) => {
    distances[vertex] = Infinity;
  });
  distances[source] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < vertices.length - 1; i++) {
    vertices.forEach((u) => {
      vertices.forEach((v) => {
        if (graph[u][v]) {
          const weight = graph[u][v];
          if (distances[u] + weight < distances[v]) {
            distances[v] = distances[u] + weight;
          }
        }
      });
    });
  }

  // Step 3: Check for negative cycles
  vertices.forEach((u) => {
    vertices.forEach((v) => {
      if (graph[u][v]) {
        const weight = graph[u][v];
        if (distances[u] + weight < distances[v]) {
          throw new Error("Negative cycle detected!");
        }
      }
    });
  });

  // Step 4: Return the distances
  return distances;
}

// Example usage:
const graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 },
};

const source = 'A';
const distances = bellmanFord(graph, source);
console.log(distances);
