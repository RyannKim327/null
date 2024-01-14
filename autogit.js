class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(vertex, distance) {
    this.queue.push({ vertex, distance });
    this.queue.sort((a, b) => a.distance - b.distance);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function dijkstra(graph, startVertex) {
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();

  // Initialize distances and previous
  for (const vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
  }
  distances[startVertex] = 0;

  // Add the starting vertex to the priority queue
  queue.enqueue(startVertex, 0);

  while (!queue.isEmpty()) {
    const { vertex: currentVertex, distance: currentDistance } = queue.dequeue();

    // Explore neighbors
    for (const neighbor in graph[currentVertex]) {
      const totalDistance = currentDistance + graph[currentVertex][neighbor];
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previous[neighbor] = currentVertex;
        queue.enqueue(neighbor, totalDistance);
      }
    }
  }

  return { distances, previous };
}

// Example graph
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 6 },
  D: { B: 3, C: 6 },
};

const startVertex = 'A';
const endVertex = 'D';

const { distances, previous } = dijkstra(graph, startVertex);

// Print shortest distance
console.log(`Shortest distance from ${startVertex} to ${endVertex}: ${distances[endVertex]}`);

// Print shortest path
let currentVertex = endVertex;
const shortestPath = [currentVertex];
while (previous[currentVertex]) {
  currentVertex = previous[currentVertex];
  shortestPath.unshift(currentVertex);
}
console.log(`Shortest path: ${shortestPath.join(' -> ')}`);
