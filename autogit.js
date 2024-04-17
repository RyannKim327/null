class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift().element;
  }
}

function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  const pq = new PriorityQueue();

  distances[startNode] = 0;
  pq.enqueue(startNode, 0);

  while (!pq.isEmpty()) {
    const currentNode = pq.dequeue();

    if (visited[currentNode]) {
      continue;
    }

    visited[currentNode] = true;

    for (let neighbor in graph[currentNode]) {
      const cost = graph[currentNode][neighbor];
      const totalCost = distances[currentNode] + cost;

      if (distances[neighbor] === undefined || distances[neighbor] > totalCost) {
        distances[neighbor] = totalCost;
        pq.enqueue(neighbor, totalCost);
      }
    }
  }

  return distances;
}

// Example usage
const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const startNode = 'A';
const distances = dijkstra(graph, startNode);
console.log(distances);
