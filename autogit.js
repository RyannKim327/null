function dijkstra(graph, startNode) {
  const distances = {}; // Stores the shortest distances from the startNode to each node
  const priorityQueue = new PriorityQueue(); // Priority queue to store nodes by shortest distance
  const visited = {}; // Keeps track of visited nodes

  // Initialize distances
  for (let node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
    priorityQueue.enqueue(node, distances[node]);
  }

  while (!priorityQueue.isEmpty()) {
    const { node: currentNode, priority: currentDistance } = priorityQueue.dequeue();

    if (visited[currentNode]) continue;

    visited[currentNode] = true;

    for (let neighbor in graph[currentNode]) {
      let distance = currentDistance + graph[currentNode][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        priorityQueue.enqueue(neighbor, distance);
      }
    }
  }

  return distances;
}

// Priority Queue implementation
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node, priority) {
    this.queue.push({ node, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Example graph
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

const startNode = 'A';
const distances = dijkstra(graph, startNode);
console.log(distances);
