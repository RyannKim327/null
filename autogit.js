function bellmanFord(graph, source, edges) {
  const distances = {};
  
  // Step 2: Initialize distances
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[source] = 0;
  
  // Step 3: Relax edges
  for (let i = 0; i < graph.length - 1; i++) {
    for (let j = 0; j < edges.length; j++) {
      const { source, destination, weight } = edges[j];
      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
      }
    }
  }
  
  // Step 4: Check for negative cycles
  for (let i = 0; i < edges.length; i++) {
    const { source, destination, weight } = edges[i];
    if (distances[source] + weight < distances[destination]) {
      throw new Error("Graph contains a negative cycle");
    }
  }
  
  // Step 6: Return the distances
  return distances;
}
