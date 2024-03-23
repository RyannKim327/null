function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const queue = new PriorityQueue();

  // Initialize distances
  for (let vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
    queue.enqueue(vertex, distances[vertex]);
  }

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    if (visited[currentVertex]) {
      continue;
    }

    for (let neighbor in graph[currentVertex]) {
      const distance = distances[currentVertex] + graph[currentVertex][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        queue.enqueue(neighbor, distance);
      }
    }

    visited[currentVertex] = true;
  }

  return distances;
}

class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift().element;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

// Example graph
const graph = {
  A: { B: 5, C: 1 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 1, B: 2, D: 4 },
  D: { B: 1, C: 4 },
};

const start = 'A';

const shortestDistances = dijkstra(graph, start);
console.log(shortestDistances);
