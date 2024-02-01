function bellmanFord(graph, source, callback) {
  // Step 1: Initialize distance to all vertices as Infinity except the source vertex
  const distance = {};
  for (const vertex of Object.keys(graph)) {
    distance[vertex] = vertex === source ? 0 : Infinity;
  }

  // Step 2: Relax edges repeatedly (V - 1) times
  const vertices = Object.keys(graph);
  for (let i = 0; i < vertices.length - 1; i++) {
    for (const vertex of vertices) {
      for (const neighbor of Object.keys(graph[vertex])) {
        const edgeWeight = graph[vertex][neighbor];
        const totalWeight = distance[vertex] + edgeWeight;
        if (totalWeight < distance[neighbor]) {
          distance[neighbor] = totalWeight;
        }
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (const vertex of vertices) {
    for (const neighbor of Object.keys(graph[vertex])) {
      const edgeWeight = graph[vertex][neighbor];
      const totalWeight = distance[vertex] + edgeWeight;
      if (totalWeight < distance[neighbor]) {
        // Negative-weight cycle found
        return callback(new Error('Graph contains a negative-weight cycle'));
      }
    }
  }

  // Step 4: Return the distances
  callback(null, distance);
}
const graph = {
  A: { B: 5, C: 2 },
  B: { D: 4 },
  C: { B: 1, D: 6 },
  D: { },
};
bellmanFord(graph, 'A', (error, distance) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Shortest distances:', distance);
  }
});
