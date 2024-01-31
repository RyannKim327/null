class Queue {
  constructor() {
    this.queue = [];
  }
  
  enqueue(item) {
    this.queue.push(item);
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue.shift();
  }
  
  isEmpty() {
    return this.queue.length === 0;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }
  
  addAdjacent(node) {
    this.adjacents.push(node);
  }
  
  getAdjacents() {
    return this.adjacents;
  }
}
function breadthFirstSearch(startingNode) {
  const visited = new Set(); // to keep track of visited nodes
  const queue = new Queue();
  
  visited.add(startingNode);
  queue.enqueue(startingNode);
  
  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();
    console.log(currentNode.value); // perform desired operation
    
    const adjacents = currentNode.getAdjacents();
    for (const adjacent of adjacents) {
      if (!visited.has(adjacent)) {
        visited.add(adjacent);
        queue.enqueue(adjacent);
      }
    }
  }
}
// Example graph
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

nodeA.addAdjacent(nodeB);
nodeA.addAdjacent(nodeC);
nodeB.addAdjacent(nodeD);
nodeD.addAdjacent(nodeE);

/* The graph looks like this:
     A
    / \
   B   C
   |
   D
   |
   E
   */
breadthFirstSearch(nodeA);
