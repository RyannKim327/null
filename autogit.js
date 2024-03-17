function dijkstra(graph, startNode) {
  let distances = {};
  let visited = {};
  let queue = new PriorityQueue();

  // Initialize distances to all nodes as infinity except the start node
  for (let node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
    queue.enqueue(node, distances[node]);
  }

  while (!queue.isEmpty()) {
    let currentNode = queue.dequeue();

    for (let neighbor in graph[currentNode]) {
      let currentDistance = distances[currentNode] + graph[currentNode][neighbor];

      if (currentDistance < distances[neighbor]) {
        distances[neighbor] = currentDistance;
        queue.enqueue(neighbor, currentDistance);
      }
    }

    visited[currentNode] = true;
  }

  return distances;
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(item, priority) {
    this.items.push({ item, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.items.shift().item;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Example graph representation (adjacency list)
const graph = {
  A: { B: 3, C: 2 },
  B: { A: 3, C: 1, D: 5 },
  C: { A: 2, B: 1, D: 4 },
  D: { B: 5, C: 4 },
};

const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances);
