class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }

  breadthFirstSearch() {
    const queue = [this]; // Start with the root node in the queue
    const visited = [];

    while (queue.length > 0) {
      const currentNode = queue.shift(); // Dequeue the first node

      // Process the current node
      visited.push(currentNode.value);

      // Enqueue all children of the current node
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }

    return visited;
  }
}

// Usage example:
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');

nodeA.addChild(nodeB);
nodeA.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);
nodeC.addChild(nodeG);

console.log(nodeA.breadthFirstSearch()); // Output: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
