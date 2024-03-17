function dijkstra(graph, start) {
  const distances = {};
  const priorityQueue = new PriorityQueue();

  for (let vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
    priorityQueue.enqueue(vertex, distances[vertex]);
  }

  while (!priorityQueue.isEmpty()) {
    const currentVertex = priorityQueue.dequeue();

    for (let neighbor in graph[currentVertex]) {
      const distance = distances[currentVertex] + graph[currentVertex][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        priorityQueue.enqueue(neighbor, distance);
      }
    }
  }

  return distances;
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift().value;
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

// Example graph
const graph = {
  A: { B: 3, C: 4 },
  B: { A: 3, C: 1, D: 6 },
  C: { A: 4, B: 1, D: 2 },
  D: { B: 6, C: 2 }
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances);
