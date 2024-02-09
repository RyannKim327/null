function dijkstra(graph, initialNode) {
  const distances = {};
  const visited = {};
  const queue = new PriorityQueue();

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[initialNode] = 0;

  queue.enqueue(initialNode, 0);

  while (!queue.isEmpty()) {
    const { element: currentNode } = queue.dequeue();
    if (visited[currentNode]) continue;

    visited[currentNode] = true;

    for (const neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const totalDistance = distances[currentNode] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        queue.enqueue(neighbor, totalDistance);
      }
    }
  }

  return distances;
}

// Sample usage
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 2 },
  D: { B: 3, C: 2 },
};
const initialNode = 'A';
const shortestDistances = dijkstra(graph, initialNode);
console.log(shortestDistances);
