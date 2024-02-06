class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }
}
function breadthFirstSearch(startNode, targetValue) {
  const visited = new Set(); // track which nodes have been visited
  const queue = new Queue(); // create a queue for BFS traversal

  queue.enqueue(startNode);
  visited.add(startNode);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

    // Check if the current node's value matches the target value
    if (currentNode.value === targetValue) {
      return currentNode;
    }

    // Enqueue all unvisited neighboring nodes
    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        queue.enqueue(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return null; // Target value not found
}
// Create nodes and define their neighbors
const nodeA = new GraphNode('A');
const nodeB = new GraphNode('B');
const nodeC = new GraphNode('C');
const nodeD = new GraphNode('D');
const nodeE = new GraphNode('E');
const nodeF = new GraphNode('F');

nodeA.addNeighbor(nodeB);
nodeA.addNeighbor(nodeC);
nodeB.addNeighbor(nodeD);
nodeB.addNeighbor(nodeE);
nodeC.addNeighbor(nodeE);
nodeD.addNeighbor(nodeF);

// Perform breadth-first search starting from nodeA, searching for nodeF
const resultNode = breadthFirstSearch(nodeA, 'F');

if (resultNode) {
  console.log('Target node found:', resultNode.value);
} else {
  console.log('Target node not found.');
}
