class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}
function breadthFirstSearch(startNode) {
  const queue = [];
  const visited = new Set();
}
  queue.push(startNode);
  visited.add(startNode);
  while (queue.length > 0) {
    // Dequeue the node from the front of the queue
    const currentNode = queue.shift();

    // Process the current node (e.g., print its value or perform some operation)
    console.log(currentNode.value);

    // Traverse through each neighbor of the current node
    for (const neighbor of currentNode.neighbors) {
      // Check if the neighbor has not been visited
      if (!visited.has(neighbor)) {
        // Enqueue the neighbor onto the queue and mark it as visited
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
// Create nodes
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

// Connect nodes
nodeA.neighbors.push(nodeB, nodeC);
nodeB.neighbors.push(nodeD, nodeE);
nodeC.neighbors.push(nodeD);
nodeE.neighbors.push(nodeB);

// Perform breadth-first search starting from nodeA
breadthFirstSearch(nodeA);
