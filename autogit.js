function bellmanFord(graph, source) {
  // Step 1: Define the graph
  const vertices = Object.keys(graph);
  const numVertices = vertices.length;

  // Step 2: Initialize the distance and predecessor arrays
  const distance = {};
  const predecessor = {};
  vertices.forEach((vertex) => {
    distance[vertex] = Infinity;
    predecessor[vertex] = null;
  });
  distance[source] = 0;

  // Step 3: Relax the edges
  for (let i = 1; i < numVertices - 1; i++) {
    for (let j = 0; j < numVertices; j++) {
      const u = vertices[j];
      const neighbors = graph[u];
      neighbors.forEach((neighbor) => {
        const v = neighbor[0];
        const weight = neighbor[1];
        const newDistance = distance[u] + weight;
        if (newDistance < distance[v]) {
          distance[v] = newDistance;
          predecessor[v] = u;
        }
      });
    }
  }

  // Step 4: Check for negative cycles
  for (let j = 0; j < numVertices; j++) {
    const u = vertices[j];
    const neighbors = graph[u];
    neighbors.forEach((neighbor) => {
      const v = neighbor[0];
      const weight = neighbor[1];
      const newDistance = distance[u] + weight;
      if (newDistance < distance[v]) {
        throw new Error("Graph contains a negative-weight cycle");
      }
    });
  }

  // Step 5: Retrieve the shortest path
  return { distance, predecessor };
}
