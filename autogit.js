function bellmanFord(graph, source) {
  const nodes = Object.keys(graph);
  const distances = {};
  const parents = {};

  // Step 1: Initialization
  nodes.forEach((node) => {
    distances[node] = Infinity;
    parents[node] = null;
  });
  distances[source] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes.forEach((u) => {
      nodes.forEach((v) => {
        if (graph[u][v] && distances[u] + graph[u][v] < distances[v]) {
          distances[v] = distances[u] + graph[u][v];
          parents[v] = u;
        }
      });
    });
  }

  // Step 2b: Check for negative-weight cycles
  let negativeCycles = false;
  nodes.forEach((u) => {
    nodes.forEach((v) => {
      if (graph[u][v] && distances[u] + graph[u][v] < distances[v]) {
        negativeCycles = true;
      }
    });
  });

  if (negativeCycles) {
    return "Graph contains negative-weight cycles.";
  }

  return { distances, parents };
}

// Example usage:
const graph = {
  A: { B: 3, C: 5 },
  B: { C: 2 },
  C: { D: -10 },
  D: {},
};

const sourceNode = "A";
const result = bellmanFord(graph, sourceNode);

console.log("Distances:", result.distances);
console.log("Parents:", result.parents);
