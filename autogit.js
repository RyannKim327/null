class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
  
  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }
}
function breadthFirstSearch(startNode, target) {
  let queue = []; // Create an empty queue to store nodes to visit
  let visited = new Set(); // Create a Set to store visited nodes
  
  queue.push(startNode); // Enqueue the starting node
  
  while (queue.length > 0) {
    const currentNode = queue.shift(); // Dequeue the first node
    
    // Check if the current node is the target
    if (currentNode.value === target) {
      return currentNode;
    }
    
    // Add neighbors to the queue if they haven't been visited
    currentNode.neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }
  
  return null; // Target not found
}
// Create nodes
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');
const nodeG = new Node('G');

// Set up neighbors
nodeA.addNeighbor(nodeB);
nodeA.addNeighbor(nodeC);
nodeB.addNeighbor(nodeD);
nodeB.addNeighbor(nodeE);
nodeC.addNeighbor(nodeF);
nodeE.addNeighbor(nodeG);

// Run BFS
const targetNode = breadthFirstSearch(nodeA, 'G');

// Check if targetNode was found
if (targetNode) {
  console.log(`Target found: ${targetNode.value}`);
} else {
  console.log('Target not found');
}
