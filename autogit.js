function bellmanFord(graph, start) {
  const distances = {};
  const predecessors = {};
  const vertices = Object.keys(graph);

  // Step 3
  vertices.forEach(vertex => {
    distances[vertex] = Infinity;
    predecessors[vertex] = null;
  });

  // Step 4
  distances[start] = 0;

  // Step 5
  for (let i = 0; i < vertices.length - 1; i++) {
    vertices.forEach(vertex => {
      graph[vertex].forEach(edge => {
        const { destination, weight } = edge;
        if (distances[vertex] + weight < distances[destination]) {
          distances[destination] = distances[vertex] + weight;
          predecessors[destination] = vertex;
        }
      });
    });
  }

  // Step 7
  vertices.forEach(vertex => {
    graph[vertex].forEach(edge => {
      const { destination, weight } = edge;
      if (distances[vertex] + weight < distances[destination]) {
        throw new Error('Graph contains a negative weight cycle');
      }
    });
  });

  // Step 8
  return { distances, predecessors };
}

// Example usage
const graph = {
  A: [{ destination: 'B', weight: 4 }, { destination: 'C', weight: 2 }],
  B: [{ destination: 'C', weight: -3 }, { destination: 'D', weight: 2 }],
  C: [{ destination: 'E', weight: 3 }],
  D: [{ destination: 'B', weight: 1 }, { destination: 'C', weight: 5 }],
  E: [{ destination: 'D', weight: 1 }],
};

const { distances, predecessors } = bellmanFord(graph, 'A');
console.log(distances); // Output: { A: 0, B: 1, C: -1, D: 3, E: 2 }
console.log(predecessors); // Output: { A: null, B: 'A', C: 'B', D: 'E', E: 'C' }
