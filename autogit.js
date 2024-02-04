// Graph representation (adjacency list)
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 6 },
  D: { B: 3, C: 6 },
};

function dijkstra(graph, start) {
  const distances = {};
  const visited = {};
  const queue = new PriorityQueue();

  // Initialize distances and queue
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;
  queue.enqueue(start, 0);

  while (!queue.isEmpty()) {
    const { element: currentVertex } = queue.dequeue();
    if (visited[currentVertex]) continue;

    const neighbors = graph[currentVertex];
    for (let neighbor in neighbors) {
      const distance = distances[currentVertex] + neighbors[neighbor];

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
    const item = { element, priority };
    let added = false;

    for (let i = 0; i < this.elements.length; i++) {
      if (item.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, item);
        added = true;
        break;
      }
    }

    if (!added) {
      this.elements.push(item);
    }
  }

  dequeue() {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

// Example usage
const distances = dijkstra(graph, 'A');
console.log(distances); // { A: 0, B: 5, C: 2, D: 6 }
