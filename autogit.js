function bellmanFord(graph, source) {
  const vertices = Object.keys(graph);
  const dist = {};

  // Step 2: Initialize distances
  for (const vertex of vertices) {
    dist[vertex] = Infinity;
  }
  dist[source] = 0;

  // Step 3: Relax edges
  for (let i = 0; i < vertices.length - 1; i++) {
    for (const fromVertex of vertices) {
      for (const { toVertex, weight } of graph[fromVertex]) {
        if (dist[fromVertex] + weight < dist[toVertex]) {
          dist[toVertex] = dist[fromVertex] + weight;
        }
      }
    }
  }

  // Step 4: Check for negative-weight cycles
  for (const fromVertex of vertices) {
    for (const { toVertex, weight } of graph[fromVertex]) {
      if (dist[fromVertex] + weight < dist[toVertex]) {
        throw new Error('Graph contains negative-weight cycle');
      }
    }
  }

  // Step 5: Return shortest distances
  return dist;
}

// Example usage
const graph = {
  A: [{ toVertex: 'B', weight: 3 }, { toVertex: 'C', weight: 5 }],
  B: [{ toVertex: 'D', weight: 2 }],
  C: [{ toVertex: 'D', weight: 2 }],
  D: [{ toVertex: 'E', weight: 4 }],
  E: [],
};

const source = 'A';
const shortestDistances = bellmanFord(graph, source);
console.log(shortestDistances);
