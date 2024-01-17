class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
  
  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }
}
function breadthFirstSearch(startNode) {
  // Create a queue to store nodes for traversal
  const queue = [];
  
  // Create a set to store visited nodes
  const visited = new Set();
  
  // Enqueue the starting node
  queue.push(startNode);
  visited.add(startNode);
  
  // Process the queue until it's empty
  while (queue.length > 0) {
    // Dequeue the node from the front of the queue
    const current = queue.shift();
    
    // Process the current node
    console.log(current.value);
    
    // Enqueue all unvisited neighbors
    for (const neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
}
// Create nodes
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");

// Connect nodes
nodeA.addNeighbor(nodeB);
nodeA.addNeighbor(nodeC);
nodeB.addNeighbor(nodeD);
nodeB.addNeighbor(nodeE);
nodeC.addNeighbor(nodeF);
breadthFirstSearch(nodeA);
