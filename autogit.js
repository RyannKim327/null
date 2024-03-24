function dijkstra(graph, source) {
  const distances = {};
  const priorityQueue = new MinHeap();

  // Initialize distances
  for (let node in graph) {
    distances[node] = node === source ? 0 : Infinity;
    priorityQueue.insert(node, distances[node]);
  }

  while (!priorityQueue.isEmpty()) {
    const currentNode = priorityQueue.extractMin();

    for (let neighbor in graph[currentNode]) {
      const edgeWeight = graph[currentNode][neighbor];
      const newDistance = distances[currentNode] + edgeWeight;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        priorityQueue.insert(neighbor, newDistance);
      }
    }
  }

  return distances;
}
