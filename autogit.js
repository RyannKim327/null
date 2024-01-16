function bellmanFord(graph, start) {
   // Step 1: Initialize distance array and set all distances to Infinity
   let distance = {};
   for (let node in graph) {
      distance[node] = Infinity;
   }
   
   // Set the distance of the start node to 0
   distance[start] = 0;

   // Step 2: Relax edges repeatedly
   for (let i = 0; i < Object.keys(graph).length - 1; i++) {
      for (let node in graph) {
         for (let neighbor in graph[node]) {
            let weight = graph[node][neighbor];
            if (distance[node] + weight < distance[neighbor]) {
               distance[neighbor] = distance[node] + weight;
            }
         }
      }
   }

   // Step 3: Check for negative-weight cycles
   for (let node in graph) {
      for (let neighbor in graph[node]) {
         let weight = graph[node][neighbor];
         if (distance[node] + weight < distance[neighbor]) {
            throw new Error('Graph contains negative-weight cycle');
         }
      }
   }

   return distance;
}
let graph = {
   A: { B: -1, C: 4 },
   B: { C: 3, D: 2, E: 2 },
   C: {},
   D: { B: 1, C: 5 },
   E: { D: -3 }
};
let startNode = 'A';
let shortestPaths = bellmanFord(graph, startNode);

console.log(shortestPaths);
