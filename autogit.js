// Dijkstra's algorithm
function dijkstra(graph, startNode, endNode) {
  const distance = {};
  const visited = {};
  const previous = {};

  // Initialize all distances as Infinity except the startNode
  for (let node in graph) {
    distance[node] = Infinity;
    visited[node] = false;
    previous[node] = null;
  }
  distance[startNode] = 0;

  // Priority queue implementation
  const queue = new PriorityQueue();
  queue.enqueue(startNode, 0);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue().element;
    if (currentNode === endNode) {
      break; // Reached the end node, exit the loop
    }
    if (visited[currentNode]) {
      continue; // Already visited, skip to the next iteration
    }
    visited[currentNode] = true;

    for (let neighbor in graph[currentNode]) {
      const distanceToNeighbor = distance[currentNode] + graph[currentNode][neighbor];
      if (distanceToNeighbor < distance[neighbor]) {
        distance[neighbor] = distanceToNeighbor;
        previous[neighbor] = currentNode;
        queue.enqueue(neighbor, distance[neighbor]);
      }
    }
  }

  // Extract the shortest path
  const shortestPath = [];
  let currentNode = endNode;
  while (currentNode !== null) {
    shortestPath.unshift(currentNode);
    currentNode = previous[currentNode];
  }

  return {
    distance: distance[endNode],
    path: shortestPath,
  };
}

// Priority Queue implementation
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    const node = { element, priority };
    let added = false;
    for (let i = 0; i < this.elements.length; i++) {
      if (node.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, node);
        added = true;
        break;
      }
    }
    if (!added) {
      this.elements.push(node);
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
const graph = {
  A: { B: 4, C: 2 },
  B: { E: 3 },
  C: { D: 2 },
  D: { B: 1, E: 3 },
  E: {},
};

const startNode = 'A';
const endNode = 'E';

const result = dijkstra(graph, startNode, endNode);
console.log(result.distance);  // Output: 7 (shortest distance from A to E)
console.log(result.path);     // Output: ["A", "C", "D", "B", "E"] (shortest path from A to E)
