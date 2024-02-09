// Function to find the vertex with the minimum distance value
function minDistance(distances, visited) {
  let min = Infinity;
  let minIndex = -1;

  for (let i = 0; i < distances.length; i++) {
    if (!visited[i] && distances[i] <= min) {
      min = distances[i];
      minIndex = i;
    }
  }

  return minIndex;
}

// Dijkstra's algorithm implementation
function dijkstra(graph, start) {
  const distances = new Array(graph.length).fill(Infinity); // Initialize distances to Infinity
  const visited = new Array(graph.length).fill(false); // Mark all vertices as not visited

  distances[start] = 0; // Distance to start vertex is always 0

  for (let i = 0; i < graph.length - 1; i++) {
    const u = minDistance(distances, visited);

    visited[u] = true; // Mark the selected vertex as visited

    for (let v = 0; v < graph.length; v++) {
      if (
        !visited[v] &&
        graph[u][v] !== 0 && // There is an edge between u and v
        distances[u] !== Infinity && // u is reachable
        distances[u] + graph[u][v] < distances[v] // Shorter path found
      ) {
        distances[v] = distances[u] + graph[u][v]; // Update the distance
      }
    }
  }

  return distances;
}

// Example usage
const graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];

const startVertex = 0;
const shortestDistances = dijkstra(graph, startVertex);

console.log("Shortest distances:", shortestDistances);
