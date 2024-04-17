function dijkstra(graph, startNode) {
  let distances = {};
  let visited = {};
  let queue = new PriorityQueue();

  distances[startNode] = 0;
  queue.enqueue(startNode, 0);

  for (let node in graph) {
    if (node !== startNode) {
      distances[node] = Infinity;
    }
    visited[node] = null;
  }

  while (!queue.isEmpty()) {
    let currentNode = queue.dequeue().data;
    let currentDistance = distances[currentNode];

    for (let neighbor in graph[currentNode]) {
      let neighborDistance = currentDistance + graph[currentNode][neighbor];

      if (neighborDistance < distances[neighbor]) {
        distances[neighbor] = neighborDistance;
        queue.enqueue(neighbor, neighborDistance);
        visited[neighbor] = currentNode;
      }
    }

    visited[currentNode] = null;
  }

  return distances;
}

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

// Example graph
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3 },
  D: { B: 10, C: 3 },
};

const startNode = 'A';
const distances = dijkstra(graph, startNode);
console.log(distances);
