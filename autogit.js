// Example graph representation using adjacency list
const graph = {
  A: { B: 5, C: 2 },
  B: { D: 4, E: 2 },
  C: { B: 8, E: 7 },
  D: { F: 3 },
  E: { D: 6, F: 1 },
  F: {},
};

// Dijkstra's algorithm implementation
function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const queue = new PriorityQueue();

  // Set initial distances and add start node to the queue
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  queue.enqueue(start, 0);

  while (!queue.isEmpty()) {
    const minNode = queue.dequeue().element;
    if (visited[minNode]) continue;

    visited[minNode] = true;
    const neighbors = graph[minNode];

    for (const neighbor in neighbors) {
      const distance = distances[minNode] + neighbors[neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        queue.enqueue(neighbor, distance);
      }
    }
  }

  return distances;
}

// Utility function for priority queue
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    this.queue.push({ element, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}

// Usage example
const startNode = 'A';
const distances = dijkstra(graph, startNode);
console.log(distances);
