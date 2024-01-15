function initializeGraph(vertices, edges) {
  const graph = new Map();

  for (let i = 0; i < vertices.length; i++) {
    graph.set(vertices[i], []);
  }

  for (let i = 0; i < edges.length; i++) {
    const [src, dest, weight] = edges[i];
    graph.get(src).push({ destination: dest, weight: weight });
  }

  return graph;
}
function bellmanFord(graph, source) {
  const distances = new Map();
  const predecessors = new Map();

  // Step 1: Initialize distances and predecessors
  for (let [vertex] of graph) {
    distances.set(vertex, Infinity);
    predecessors.set(vertex, null);
  }
  distances.set(source, 0);

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < graph.size - 1; i++) {
    for (let [vertex, edges] of graph) {
      for (let edge of edges) {
        const { destination, weight } = edge;
        const distance = distances.get(vertex) + weight;

        if (distance < distances.get(destination)) {
          distances.set(destination, distance);
          predecessors.set(destination, vertex);
        }
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let [vertex, edges] of graph) {
    for (let edge of edges) {
      const { destination, weight } = edge;
      const distance = distances.get(vertex) + weight;

      if (distance < distances.get(destination)) {
        throw new Error('Graph contains negative-weight cycles');
      }
    }
  }

  return { distances, predecessors };
}
const vertices = ['A', 'B', 'C', 'D', 'E'];
const edges = [
  ['A', 'B', 4],
  ['A', 'C', 2],
  ['B', 'E', 3],
  ['C', 'D', 2],
  ['D', 'B', -1],
  ['D', 'E', 2]
];

const graph = initializeGraph(vertices, edges);
const source = 'A';
const { distances, predecessors } = bellmanFord(graph, source);

console.log('Distances:', distances);
console.log('Predecessors:', predecessors);
