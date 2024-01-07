function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();

  // Set up initial state
  Object.keys(graph).forEach((node) => {
    distances[node] = Infinity;
    previous[node] = null;
  });
  distances[start] = 0;
  queue.enqueue(start, 0);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (current === end) {
      // Build the path
      const path = [];
      let node = end;
      while (node !== null) {
        path.unshift(node);
        node = previous[node];
      }
      return path;
    }

    // Loop through neighbors
    Object.keys(graph[current]).forEach((neighbor) => {
      const distance = distances[current] + graph[current][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = current;
        queue.enqueue(neighbor, distance);
      }
    });
  }

  // No path found
  return null;
}

class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.sort();
  }

  dequeue() {
    return this.elements.shift().element;
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  sort() {
    this.elements.sort((a, b) => a.priority - b.priority);
  }
}

// Example usage
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 2 },
  D: { B: 3, C: 2 },
};
const startNode = 'A';
const endNode = 'D';

const shortestPath = dijkstra(graph, startNode, endNode);
console.log(shortestPath); // Output: ['A', 'C', 'D']
