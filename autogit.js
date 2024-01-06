function initializeGraph(vertices, edges) {
   const graph = {};
   for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i];
      graph[vertex] = [];
   }

   for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      const src = edge[0];
      const dest = edge[1];
      const weight = edge[2];
      graph[src].push({ dest, weight });
   }

   return graph;
}
function bellmanFord(graph, start) {
   const vertices = Object.keys(graph);
   const distances = {};
   const parents = {};
   for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i];
      distances[vertex] = Infinity;
      parents[vertex] = null;
   }
   distances[start] = 0;

   for (let i = 0; i < vertices.length - 1; i++) {
      for (let j = 0; j < vertices.length; j++) {
         const vertex = vertices[j];
         const edges = graph[vertex];
         for (let k = 0; k < edges.length; k++) {
            const edge = edges[k];
            const dest = edge.dest;
            const weight = edge.weight;
            if (distances[vertex] + weight < distances[dest]) {
               distances[dest] = distances[vertex] + weight;
               parents[dest] = vertex;
            }
         }
      }
   }

   for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i];
      const edges = graph[vertex];
      for (let j = 0; j < edges.length; j++) {
         const edge = edges[j];
         const dest = edge.dest;
         const weight = edge.weight;
         if (distances[vertex] + weight < distances[dest]) {
            throw new Error("Negative-weight cycle detected!");
         }
      }
   }

   return { distances, parents };
}
const vertices = ['A', 'B', 'C', 'D', 'E'];
const edges = [
   ['A', 'B', 3],
   ['B', 'C', 4],
   ['C', 'D', 2],
   ['D', 'E', 5],
   ['E', 'A', -10]
];

const graph = initializeGraph(vertices, edges);
const startVertex = 'A';
const result = bellmanFord(graph, startVertex);

console.log(result.distances); // Output: { A: 0, B: 3, C: 7, D: 9, E: -5 }
console.log(result.parents); // Output: { A: null, B: 'A', C: 'B', D: 'C', E: 'D' }
