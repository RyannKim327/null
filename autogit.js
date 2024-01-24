// Node class to represent a graph node
class Node {
  constructor(value, neighbors = []) {
    this.value = value;
    this.neighbors = neighbors;
  }
}

// Breadth-First Search function
function bfs(startNode, targetValue) {
  const queue = []; // Queue to store nodes to visit

  // Track visited nodes
  const visited = new Set();
  visited.add(startNode);

  // Enqueue the start node
  queue.push(startNode);

  // Breadth-First Search loop
  while (queue.length > 0) {
    const currentNode = queue.shift(); // Dequeue a node from the queue

    // Check if the current node has the target value
    if (currentNode.value === targetValue) {
      return currentNode;
    }

    // Enqueue unvisited neighbors
    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return null; // Target value not found
}

// Example usage
// Create nodes for a graph
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');

// Define the graph connections
nodeA.neighbors = [nodeB, nodeC];
nodeB.neighbors = [nodeD, nodeE];
nodeC.neighbors = [nodeF];

// Perform BFS from 'nodeA' to find 'nodeF'
const result = bfs(nodeA, 'F');

if (result) {
  console.log(`Target node with value '${result.value}' found!`);
} else {
  console.log('Target node not found.');
}
