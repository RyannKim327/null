class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
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
class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}
function breadthFirstSearch(startNode, target) {
  const queue = new Queue();
  const visited = new Set();

  queue.enqueue(startNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

    // Check if the current node matches the target
    if (currentNode.value === target) {
      return currentNode;
    }

    // Add neighboring nodes to the queue
    currentNode.children.forEach((child) => {
      if (!visited.has(child)) {
        queue.enqueue(child);
        visited.add(child);
      }
    });
  }

  return null; // Target not found
}
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");

nodeA.children = [nodeB, nodeC];
nodeB.children = [nodeD, nodeE];
nodeC.children = [nodeF];
const targetNode = breadthFirstSearch(nodeA, "F");

if (targetNode) {
  console.log("Target found!");
} else {
  console.log("Target not found!");
}
