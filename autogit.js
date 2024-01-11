class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node, priority) {
    this.values.push({ node, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

function dijkstra(graph, startNode) {
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();

  // Set initial distances to infinity except for the startNode
  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[startNode] = 0;

  // Enqueue the startNode with priority 0
  queue.enqueue(startNode, 0);

  while (!queue.isEmpty()) {
    const { node } = queue.dequeue();

    for (let neighbor in graph[node]) {
      const cost = graph[node][neighbor];
      const distance = distances[node] + cost;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = node;
        queue.enqueue(neighbor, distance);
      }
    }
  }

  return { distances, previous };
}

function reconstructPath(previous, targetNode) {
  const path = [];
  while (targetNode !== null) {
    path.unshift(targetNode);
    targetNode = previous[targetNode];
  }
  return path;
}

// Example Usage:
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 6 },
  D: { B: 3, C: 6 },
};

const startNode = 'A';
const { distances, previous } = dijkstra(graph, startNode);
const targetNode = 'D';
const shortestPath = reconstructPath(previous, targetNode);

console.log('Shortest Distances:', distances);
console.log('Shortest Path from', startNode, 'to', targetNode + ':', shortestPath);
