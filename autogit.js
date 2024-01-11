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
  const queue = [];
  const visited = new Set();
  
  queue.push(startNode);
  visited.add(startNode);
  
  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode.value); // Process the node here
    
    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
}
// Create the graph
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

nodeA.addNeighbor(nodeB);
nodeA.addNeighbor(nodeC);
nodeB.addNeighbor(nodeC);
nodeC.addNeighbor(nodeA);
nodeC.addNeighbor(nodeD);
nodeD.addNeighbor(nodeD);

// Perform breadth-first search
breadthFirstSearch(nodeA);
