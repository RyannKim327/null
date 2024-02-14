function bellmanFord(graph, source, numVertices) {
  let distances = Array(numVertices).fill(Infinity);
  distances[source] = 0;

  for (let i = 0; i < numVertices - 1; i++) {
    for (let j = 0; j < graph.length; j++) {
      let [src, dest, weight] = graph[j];
      if (distances[src] + weight < distances[dest]) {
        distances[dest] = distances[src] + weight;
      }
    }
  }

  for (let i = 0; i < graph.length; i++) {
    let [src, dest, weight] = graph[i];
    if (distances[src] + weight < distances[dest]) {
      return null; // Negative cycle found
    }
  }

  return distances;
}
