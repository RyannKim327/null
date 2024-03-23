function dijkstra(graph, source) {
  const distances = {};
  const visited = {};
  const queue = new PriorityQueue();

  for (let node in graph) {
    distances[node] = node === source ? 0 : Infinity;
    queue.enqueue(node, distances[node]);
  }

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

    if (visited[currentNode]) {
      continue;
    }

    visited[currentNode] = true;

    for (let neighbor in graph[currentNode]) {
      const distance = distances[currentNode] + graph[currentNode][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        queue.enqueue(neighbor, distance);
      }
    }
  }

  return distances;
}
const graph = {
  A: { B: 5, C: 3 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 3, B: 2, D: 6 },
  D: { B: 1, C: 6 },
};

const source = 'A';
const distances = dijkstra(graph, source);
console.log(distances); // Output the shortest distances from the source node
