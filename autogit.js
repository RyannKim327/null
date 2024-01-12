function Dijkstra(graph, source, destination) {
  const nodes = Object.keys(graph);
  const distances = {};
  const visited = {};

  // Set initial distances to infinity
  for (let node of nodes) {
    distances[node] = Infinity;
  }

  distances[source] = 0;

  while (!visited[destination]) {
    let smallestDist = Infinity;
    let smallestNode = null;

    // Find the unvisited node with the smallest distance
    for (let node of nodes) {
      if (!visited[node] && distances[node] < smallestDist) {
        smallestDist = distances[node];
        smallestNode = node;
      }
    }

    if (smallestNode === null) {
      break; // No more unvisited nodes
    }

    visited[smallestNode] = true;

    // Update distances to neighbors
    for (let neighbor in graph[smallestNode]) {
      let distance = graph[smallestNode][neighbor];
      let newDistance = distances[smallestNode] + distance;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
      }
    }
  }

  return distances[destination];
}
