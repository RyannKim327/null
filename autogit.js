function bellmanFord(graph, source) {
  const vertices = Object.keys(graph);
  const distances = {};

  // Step 1: Initialization
  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = Infinity;
  }
  distances[source] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < vertices.length - 1; i++) {
    for (let j = 0; j < vertices.length; j++) {
      const vertex = vertices[j];
      const edges = graph[vertex];

      for (let k = 0; k < edges.length; k++) {
        const { to, weight } = edges[k];
        const distance = distances[vertex] + weight;

        if (distance < distances[to]) {
          distances[to] = distance;
        }
      }
    }
  }

  // Step 3: Check for negative cycles
  for (let i = 0; i < vertices.length - 1; i++) {
    for (let j = 0; j < vertices.length; j++) {
      const vertex = vertices[j];
      const edges = graph[vertex];

      for (let k = 0; k < edges.length; k++) {
        const { to, weight } = edges[k];
        const distance = distances[vertex] + weight;

        if (distance < distances[to]) {
          // Negative cycle found
          return null;
        }
      }
    }
  }

  return distances;
}
