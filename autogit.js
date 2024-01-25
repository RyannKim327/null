class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}
function breadthFirstSearch(startNode) {
  // Create a visited set to keep track of visited nodes
  const visited = new Set();
  
  // Create a queue to store nodes for traversal
  const queue = [startNode];
  
  // Mark the start node as visited
  visited.add(startNode);
  
  // Process nodes in the queue
  while (queue.length > 0) {
    // Remove the first node from the queue
    const currentNode = queue.shift();
    
    // Process the current node (you can do whatever you need to do with it)
    console.log(currentNode.value);
    
    // Iterate over the neighbors of the current node
    for (const neighbor of currentNode.neighbors) {
      // If the neighbor has not been visited, mark it as visited and enqueue it
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
// Create nodes
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

// Create connections between nodes
nodeA.neighbors.push(nodeB, nodeC);
nodeB.neighbors.push(nodeD, nodeE);
nodeC.neighbors.push(nodeE);

// Call the breadth-first search algorithm
breadthFirstSearch(nodeA);
