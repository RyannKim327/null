function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  const queue = new PriorityQueue();

  // Initialize distances for all nodes to infinity except the start node
  for (let node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
    queue.enqueue(node, distances[node]);
  }

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

    if (!visited[currentNode]) {
      visited[currentNode] = true;

      for (let neighbor in graph[currentNode]) {
        const distance = distances[currentNode] + graph[currentNode][neighbor];

        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          queue.enqueue(neighbor, distance);
        }
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

// Example usage
const graph = {
  A: { B: 5, C: 1 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 1, B: 2, D: 4 },
  D: { B: 1, C: 4 },
};

const startNode = 'A';
const result = dijkstra(graph, startNode);

console.log(result);
