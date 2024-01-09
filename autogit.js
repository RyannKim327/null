function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};

  // Set distances with Infinity, except for the start node
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  // Main algorithm
  let currentNode = startNode;
  while (currentNode) {
    const neighbors = graph[currentNode];
    const distance = distances[currentNode];

    for (const neighbor in neighbors) {
      const newDistance = distance + neighbors[neighbor];
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
      }
    }

    visited[currentNode] = true;
    currentNode = null;

    // Find the next node with the smallest distance
    for (const node in graph) {
      if (!visited[node] && (!currentNode || distances[node] < distances[currentNode])) {
        currentNode = node;
      }
    }
  }

  return distances;
}
