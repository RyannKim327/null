function dijkstra(graph, source) {
  const dist = {};
  const visited = {};

  // Initialize distances to all nodes as infinity except source node
  for (let vertex in graph) {
    dist[vertex] = Infinity;
  }
  dist[source] = 0;

  while (true) {

    let current = null;

    // Select the node with the smallest distance
    for (let vertex in graph) {
      if (!visited[vertex] && (current === null || dist[vertex] < dist[current])) {
        current = vertex;
      }
    }

    if (current === null) {
      break;
    }

    visited[current] = true;

    // Update distances to neighboring nodes
    for (let neighbor in graph[current]) {
      let distance = graph[current][neighbor];
      let totalDistance = dist[current] + distance;
      if (totalDistance < dist[neighbor]) {
        dist[neighbor] = totalDistance;
      }
    }
  }

  return dist;
}
