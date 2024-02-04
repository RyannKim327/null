function bellmanFord(graph, source) {
  const distances = {};
  
  // Step 1: Set up distances and initialize them
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[source] = 0;

  // Step 2: Relax edges
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let vertex in graph) {
      for (let neighbor in graph[vertex]) {
        const weight = graph[vertex][neighbor];
        if (distances[vertex] + weight < distances[neighbor]) {
          distances[neighbor] = distances[vertex] + weight;
        }
      }
    }
  }

  // Step 3: Detect negative cycles
  for (let vertex in graph) {
    for (let neighbor in graph[vertex]) {
      const weight = graph[vertex][neighbor];
      if (distances[vertex] + weight < distances[neighbor]) {
        // Negative cycle detected
        return "Graph contains a negative cycle";
      }
    }
  }

  return distances;
}

// Example usage
const graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 },
};

const source = "A";
const distances = bellmanFord(graph, source);
console.log(distances);
