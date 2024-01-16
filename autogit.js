const INF = Number.MAX_SAFE_INTEGER;
const dist = [];
const prev = [];
function bellmanFord(graph, source) {
  const vertices = Object.keys(graph);

  // Step 1: Initialize distances and previous array
  for (let i = 0; i < vertices.length; i++) {
    dist[vertices[i]] = INF;
    prev[vertices[i]] = null;
  }
  dist[source] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < vertices.length - 1; i++) {
    for (let j = 0; j < vertices.length; j++) {
      const u = vertices[j];
      const neighbors = Object.keys(graph[u]);

      for (let k = 0; k < neighbors.length; k++) {
        const v = neighbors[k];
        const weight = graph[u][v];
        if (dist[u] + weight < dist[v]) {
          dist[v] = dist[u] + weight;
          prev[v] = u;
        }
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let i = 0; i < vertices.length; i++) {
    const u = vertices[i];
    const neighbors = Object.keys(graph[u]);

    for (let j = 0; j < neighbors.length; j++) {
      const v = neighbors[j];
      const weight = graph[u][v];
      if (dist[u] + weight < dist[v]) {
        throw new Error("Graph contains a negative-weight cycle!");
      }
    }
  }

  return { dist, prev };
}
const graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 },
};

const sourceVertex = 'A';
const result = bellmanFord(graph, sourceVertex);

console.log("The shortest distances from '" + sourceVertex + "' are:");
console.log(result.dist);

console.log("The previous vertices on the shortest paths are:");
console.log(result.prev);
The shortest distances from 'A' are:
{ A: 0, B: -1, C: 2, D: -2, E: 1 }

The previous vertices on the shortest paths are:
{ A: null, B: 'A', C: 'B', D: 'E', E: 'B' }
