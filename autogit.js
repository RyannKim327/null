const graph = {
  vertices: ['A', 'B', 'C', 'D', 'E'],
  edges: [
    { source: 'A', target: 'B', weight: 4 },
    { source: 'A', target: 'C', weight: 2 },
    { source: 'B', target: 'D', weight: 5 },
    { source: 'C', target: 'B', weight: 1 },
    { source: 'C', target: 'D', weight: 2 },
    { source: 'D', target: 'E', weight: 3 }
  ]
};
function bellmanFord(graph, source) {
  const distances = {};
  const predecessors = {};

  // Step 1: Initialize distances and predecessors
  graph.vertices.forEach(vertex => {
    distances[vertex] = vertex === source ? 0 : Infinity;
    predecessors[vertex] = null;
  });

  // Step 2: Relaxation
  for (let i = 0; i < graph.vertices.length - 1; i++) {
    graph.edges.forEach(edge => {
      const { source, target, weight } = edge;

      if (distances[source] + weight < distances[target]) {
        distances[target] = distances[source] + weight;
        predecessors[target] = source;
      }
    });
  }

  // Step 3: Check for negative weight cycles
  graph.edges.forEach(edge => {
    const { source, target, weight } = edge;

    if (distances[source] + weight < distances[target]) {
      throw new Error('Graph contains negative weight cycle');
    }
  });

  return { distances, predecessors };
}
const sourceVertex = 'A';
const result = bellmanFord(graph, sourceVertex);

console.log(`Shortest distances from vertex ${sourceVertex}:`, result.distances);
console.log(`Predecessors:`, result.predecessors);
