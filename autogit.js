function dijkstra(graph, start, target) {
  const distances = {};
  const visited = {};
  const previous = {};
  const queue = [];

  // Initialize distances
  for (let vertex in graph) {
    distances[vertex] = Infinity;
    visited[vertex] = false;
    previous[vertex] = null;
  }
  distances[start] = 0;

  // Traverse the graph
  while (queue.length > 0) {
    let smallest = queue[0];
    let smallestDistance = distances[smallest];
    for (let vertex in queue) {
      if (distances[vertex] < smallestDistance) {
        smallest = vertex;
        smallestDistance = distances[vertex];
      }
    }

    if (smallest === target) {
      // Build the shortest path
      const path = [];
      let current = target;
      while (current !== null) {
        path.unshift(current);
        current = previous[current];
      }
      return path;
    }

    // Mark the current node as visited
    visited[smallest] = true;

    // Update distances to neighbors
    for (let neighbor in graph[smallest]) {
      let distance = graph[smallest][neighbor];
      let totalDistance = distance + distances[smallest];
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previous[neighbor] = smallest;
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      }
    }
  }

  return null; // No path found
}
