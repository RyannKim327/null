class Node {
  constructor(value) {
    this.value = value;
    this.adjacentNodes = [];
  }

  addAdjacentNode(node) {
    this.adjacentNodes.push(node);
  }
}
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}
function depthFirstSearch(startNode, targetValue) {
  const stack = new Stack();
  const visited = new Set();

  stack.push(startNode);

  while (!stack.isEmpty()) {
    const currentNode = stack.pop();

    // Check if the current node is the target
    if (currentNode.value === targetValue) {
      return true;
    }

    // Mark the current node as visited
    visited.add(currentNode);

    // Push all unvisited adjacent nodes into the stack
    for (const adjacentNode of currentNode.adjacentNodes) {
      if (!visited.has(adjacentNode)) {
        stack.push(adjacentNode);
      }
    }
  }

  return false; // Target value not found
}
// Create graph nodes
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');

// Connect nodes
nodeA.addAdjacentNode(nodeB);
nodeA.addAdjacentNode(nodeC);
nodeB.addAdjacentNode(nodeD);
nodeB.addAdjacentNode(nodeE);
nodeC.addAdjacentNode(nodeF);

console.log(depthFirstSearch(nodeA, 'F')); // Output: true
console.log(depthFirstSearch(nodeA, 'G')); // Output: false
