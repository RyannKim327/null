const graph = {
  A: { B: 3, C: 4, D: 2 },
  B: { C: 1, E: 6 },
  C: { E: 2, D: 1 },
  D: { E: 4, F: 2 },
  E: { F: 3 },
  F: {}
};
function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const queue = new PriorityQueue();

  // Initialize the distances and visited objects
  for (let vertex in graph) {
    distances[vertex] = Infinity;
    visited[vertex] = false;
  }

  // Set the starting vertex's distance to 0 and add it to the queue
  distances[start] = 0;
  queue.enqueue(start, 0);

  while (!queue.isEmpty()) {
    const { element: currentVertex } = queue.dequeue();

    if (visited[currentVertex]) continue;

    visited[currentVertex] = true;

    // Process each adjacent vertex
    for (let neighbor in graph[currentVertex]) {
      const distance = graph[currentVertex][neighbor];
      const totalDistance = distances[currentVertex] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
      }

      if (!visited[neighbor]) {
        queue.enqueue(neighbor, distances[neighbor]);
      }
    }
  }

  return distances;
}
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
const startVertex = 'A';
const shortestDistances = dijkstra(graph, startVertex);
console.log(shortestDistances);
