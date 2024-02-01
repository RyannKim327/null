const graph = {
  A: [{ node: 'B', weight: 1 }, { node: 'C', weight: 4 }],
  B: [{ node: 'A', weight: 1 }, { node: 'C', weight: 2 }],
  C: [{ node: 'A', weight: 4 }, { node: 'B', weight: 2 }],
};
function dijkstra(graph, start) {
  const distances = {}; // Stores shortest distance
  const visited = {}; // Stores visited vertices
  const previous = {}; // Stores previous vertices

  // Initialize distances with Infinity and start distance as 0
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;

  while (true) {
    let closestVertex = null;

    // Find the vertex with the shortest distance
    for (let vertex in graph) {
      if (!visited[vertex] && (closestVertex === null || distances[vertex] < distances[closestVertex])) {
        closestVertex = vertex;
      }
    }

    if (distances[closestVertex] === Infinity) {
      break; // No reachable vertices remaining
    }

    // Mark the closest vertex as visited
    visited[closestVertex] = true;

    // Update distances for the adjacent vertices
    for (let neighbor of graph[closestVertex]) {
      let totalDistance = distances[closestVertex] + neighbor.weight;
      if (totalDistance < distances[neighbor.node]) {
        distances[neighbor.node] = totalDistance;
        previous[neighbor.node] = closestVertex;
      }
    }
  }

  return { distances, previous };
}
const startVertex = 'A';
const result = dijkstra(graph, startVertex);

console.log(result.distances); // Shortest distances from the start vertex
console.log(result.previous); // Previous vertices to reach each vertex
