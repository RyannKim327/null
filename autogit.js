function createGraph(vertices) {
  let graph = [];

  for (let i = 0; i < vertices; i++) {
    graph.push([]);
  }

  return graph;
}
function addEdge(graph, source, destination, weight) {
  graph[source].push({ destination, weight });
}
function bellmanFord(graph, vertices, source) {
  // Step 1: Initialize distances
  let distances = Array(vertices).fill(Infinity);
  distances[source] = 0;

  // Step 2: Relax all edges
  for (let i = 0; i < vertices - 1; i++) {
    for (let j = 0; j < vertices; j++) {
      for (let k = 0; k < graph[j].length; k++) {
        let { destination, weight } = graph[j][k];
        if (distances[j] + weight < distances[destination]) {
          distances[destination] = distances[j] + weight;
        }
      }
    }
  }

  // Step 3: Check for negative cycle
  for (let j = 0; j < vertices; j++) {
    for (let k = 0; k < graph[j].length; k++) {
      let { destination, weight } = graph[j][k];
      if (distances[j] + weight < distances[destination]) {
        // Negative cycle found, return an empty array
        return [];
      }
    }
  }

  return distances;
}
let graph = createGraph(5);
addEdge(graph, 0, 1, 6);
addEdge(graph, 0, 2, 7);
addEdge(graph, 1, 2, 8);
addEdge(graph, 1, 3, -4);
addEdge(graph, 1, 4, 5);
addEdge(graph, 2, 3, 9);
addEdge(graph, 2, 4, -3);
addEdge(graph, 3, 1, 2);
addEdge(graph, 4, 3, 7);

let shortestPaths = bellmanFord(graph, 5, 0);
console.log(shortestPaths);
