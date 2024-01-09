function dijkstra(graph, source) {
  const distances = {};
  const visited = {};

  // Initialize distances and visited arrays
  for (let node in graph) {
    distances[node] = Infinity;
    visited[node] = false;
  }

  // Distance of source node from itself is 0
  distances[source] = 0;

  // Find the shortest path for all nodes
  for (let i = 0; i < Object.keys(graph).length; i++) {
    const current = minDistanceNode(distances, visited);
    visited[current] = true;

    for (let neighbor in graph[current]) {
      const distance = graph[current][neighbor];
      const newPathDistance = distances[current] + distance;

      if (newPathDistance < distances[neighbor]) {
        distances[neighbor] = newPathDistance;
      }
    }
  }

  return distances;
}

// Helper function to find the unvisited node with the minimum distance
function minDistanceNode(distances, visited) {
  let minDistance = Infinity;
  let minNode = null;

  for (let node in distances) {
    if (distances[node] < minDistance && !visited[node]) {
      minDistance = distances[node];
      minNode = node;
    }
  }

  return minNode;
}

// Example usage
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 1 },
  D: { B: 3, C: 1 },
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);
