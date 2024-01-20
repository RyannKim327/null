function initialize(graph, source) {
  const distances = {};
  const predecessors = {};

  for (const vertex in graph) {
    distances[vertex] = Infinity;
    predecessors[vertex] = null;
  }

  distances[source] = 0;

  return { distances, predecessors };
}
function relax(u, v, weight, distances, predecessors) {
  const distanceThroughU = distances[u] + weight;
  
  if (distanceThroughU < distances[v]) {
    distances[v] = distanceThroughU;
    predecessors[v] = u;
  }
}
function bellmanFord(graph, source) {
  const { distances, predecessors } = initialize(graph, source);
  const vertices = Object.keys(graph);

  for (let i = 1; i <= vertices.length - 1; i++) {
    for (const u in graph) {
      for (const { v, weight } of graph[u]) {
        relax(u, v, weight, distances, predecessors);
      }
    }
  }

  for (const u in graph) {
    for (const { v, weight } of graph[u]) {
      if (distances[u] + weight < distances[v]) {
        throw new Error('Negative weight cycle detected');
      }
    }
  }

  return { distances, predecessors };
}
const graph = {
  A: [{ v: 'B', weight: 4 }, { v: 'C', weight: 2 }],
  B: [{ v: 'D', weight: 3 }],
  C: [{ v: 'B', weight: 1 }, { v: 'D', weight: 4 }],
  D: [{ v: 'E', weight: 2 }],
  E: [],
};
const source = 'A';

const { distances, predecessors } = bellmanFord(graph, source);

console.log('Distances:', distances);
console.log('Predecessors:', predecessors);
