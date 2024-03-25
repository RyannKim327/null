class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item, priority) {
    this.queue.push({ item, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift().item;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function beamSearch(initialNode, beamWidth, maxDepth, evaluationFunction) {
  const queue = new PriorityQueue();
  queue.enqueue([initialNode], 0);

  while (!queue.isEmpty()) {
    const path = queue.dequeue();
    const node = path[path.length - 1];

    if (path.length === maxDepth) {
      return path;
    }

    node.neighbors.forEach((neighbor) => {
      const newPath = [...path, neighbor];
      const score = evaluationFunction(newPath);
      queue.enqueue(newPath, score);
    });

    while (queue.queue.length > beamWidth) {
      queue.queue.pop();
    }
  }

  return null;
}

// Example usage
class Node {
  constructor(value, neighbors) {
    this.value = value;
    this.neighbors = neighbors;
  }
}

const node1 = new Node("A", []);
const node2 = new Node("B", []);
const node3 = new Node("C", []);
const node4 = new Node("D", []);
const node5 = new Node("E", []);
const node6 = new Node("F", []);

node1.neighbors = [node2, node3];
node2.neighbors = [node4, node5];
node3.neighbors = [node5, node6];

const evaluationFunction = (path) => {
  // Simple evaluation function: sum of values along the path
  return path.reduce((acc, node) => acc + node.value.charCodeAt(0), 0);
};

const result = beamSearch(node1, 2, 3, evaluationFunction);
console.log(result);
