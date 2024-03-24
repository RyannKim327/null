// Queue data structure
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Breadth-first search algorithm
function breadthFirstSearch(graph, startNode, targetNode) {
  const visited = new Set();
  const queue = new Queue();

  visited.add(startNode);
  queue.enqueue(startNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    if (currentNode === targetNode) {
      return true;
    }

    const neighbors = graph[currentNode];
    if (neighbors) {
      neighbors.forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.enqueue(neighbor);
        }
      });
    }
  }

  return false;
}

// Example graph represented as an adjacency list
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};

// Test the breadth-first search algorithm
const startNode = 'A';
const targetNode = 'F';
const result = breadthFirstSearch(graph, startNode, targetNode);

console.log(result ? `Path exists from ${startNode} to ${targetNode}` : `Path does not exist from ${startNode} to ${targetNode}`);
