class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}
class Queue {
  constructor() {
    this.elements = [];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  enqueue(item) {
    this.elements.push(item);
  }

  dequeue() {
    return this.elements.shift();
  }
}
function breadthFirstSearch(root, target) {
  if (root === null) {
    return false;
  }

  const queue = new Queue();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    // Check if the current node's value matches the target
    if (current.value === target) {
      return true;
    }

    // Enqueue all children of the current node
    current.children.forEach((child) => {
      queue.enqueue(child);
    });
  }

  return false; // Target not found
}
// Create a simple graph with nodes and edges
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

nodeA.children.push(nodeB, nodeC);
nodeB.children.push(nodeD, nodeE);

console.log(breadthFirstSearch(nodeA, "E")); // Output: true
console.log(breadthFirstSearch(nodeA, "F")); // Output: false
