function dijkstra(graph, source) {
  const distance = {};
  const visited = new Set();
  const pq = new PriorityQueue();

  // Initialize distances
  for (const node in graph) {
    distance[node] = Infinity;
  }
  distance[source] = 0;

  pq.enqueue(source, 0);

  while (!pq.isEmpty()) {
    const { element: current } = pq.dequeue();

    if (visited.has(current)) continue;

    visited.add(current);

    for (const neighbor in graph[current]) {
      const weight = graph[current][neighbor];
      const totalDistance = distance[current] + weight;

      if (totalDistance < distance[neighbor]) {
        distance[neighbor] = totalDistance;
        pq.enqueue(neighbor, totalDistance);
      }
    }
  }

  return distance;
}
