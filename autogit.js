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

function breadthFirstSearch(graph, startNode, targetNode) {
  const queue = new Queue();
  const visited = new Set();

  queue.enqueue(startNode);
  visited.add(startNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

    if (currentNode === targetNode) {
      return currentNode; // or perform any desired action
    }

    const neighbors = graph[currentNode];
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return null; // targetNode not found
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "E"],
  E: ["C", "D"],
};

const startNode = "A";
const targetNode = "E";

const result = breadthFirstSearch(graph, startNode, targetNode);
console.log(result); // Output: E
