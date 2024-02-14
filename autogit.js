function dijkstra(graph, source) {
  const distances = {};
  const visited = new Set();
  const queue = new PriorityQueue();

  // Initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[source] = 0;

  // Enqueue source node
  queue.enqueue({ node: source, distance: 0 });

  while (!queue.isEmpty()) {
    const { node, distance } = queue.dequeue();

    // Skip if already visited
    if (visited.has(node)) {
      continue;
    }

    // Mark as visited
    visited.add(node);

    // Update distances for neighbors
    for (const neighbor in graph[node]) {
      const newDistance = distance + graph[node][neighbor];

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        queue.enqueue({ node: neighbor, distance: newDistance });
      }
    }
  }

  return distances;
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
    this.queue.sort((a, b) => a.distance - b.distance);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Example usage
const graph = {
  A: { B: 3, C: 1 },
  B: { A: 3, C: 7, D: 5 },
  C: { A: 1, B: 7, D: 2 },
  D: { B: 5, C: 2 },
};

const distances = dijkstra(graph, 'A');

console.log(distances); // Output: { A: 0, B: 3, C: 1, D: 3 }
