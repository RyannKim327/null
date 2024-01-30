// Node class to represent a graph node
class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
  
  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }
}

// Perform a depth-first search
function depthFirstSearch(node, visited = new Set()) {
  // Mark the current node as visited
  visited.add(node.value);
  
  // Process the current node
  console.log(node.value);
  
  // Recursive call on each unvisited neighbor
  for (const neighbor of node.neighbors) {
    if (!visited.has(neighbor.value)) {
      depthFirstSearch(neighbor, visited);
    }
  }
}

// Create a graph
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');

nodeA.addNeighbor(nodeB);
nodeA.addNeighbor(nodeC);
nodeB.addNeighbor(nodeD);
nodeB.addNeighbor(nodeE);
nodeC.addNeighbor(nodeF);

// Call depth-first search starting from nodeA
depthFirstSearch(nodeA);
