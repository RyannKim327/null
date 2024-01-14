function bellmanFord(graph, source) {
  const distances = {};
  const predecessors = {};
  const vertices = Object.keys(graph);
  const edges = [];

  // Step 1: Initialize variables
  const INF = Number.MAX_VALUE;

  // Step 2: Initialize distances
  for (let i = 0; i < vertices.length; i++) {
    const vertex = vertices[i];
    distances[vertex] = INF;
  }
  distances[source] = 0;

  // Convert the graph to edges array
  for (let i = 0; i < vertices.length; i++) {
    const vertex = vertices[i];
    for (const neighbor in graph[vertex]) {
      const weight = graph[vertex][neighbor];
      edges.push({ source: vertex, target: neighbor, weight: weight });
    }
  }

  // Step 3: Relax edges repeatedly
  for (let i = 0; i < vertices.length - 1; i++) {
    for (let j = 0; j < edges.length; j++) {
      const { source, target, weight } = edges[j];
      if (distances[source] + weight < distances[target]) {
        distances[target] = distances[source] + weight;
        predecessors[target] = source;
      }
    }
  }

  // Step 4: Check for negative cycles
  for (let i = 0; i < edges.length; i++) {
    const { source, target, weight } = edges[i];
    if (distances[source] + weight < distances[target]) {
      throw new Error("Graph contains negative cycle");
    }
  }

  // Step 5: Build the shortest path
  const path = [];
  let current = source;
  while (current !== undefined) {
    path.push(current);
    current = predecessors[current];
  }
  path.reverse();

  return { distances, path };
}

// Example usage:
const graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 },
};

const source = "A";
const result = bellmanFord(graph, source);
console.log("Distances:", result.distances);
console.log("Shortest Path:", result.path);
