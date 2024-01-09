// Node class represents a particular node in the graph
class Node {
  constructor(value) {
    this.value = value;
    this.adjacentNodes = [];
    this.visited = false;
  }
  
  addAdjacentNode(node) {
    this.adjacentNodes.push(node);
  }
}

// DFS algorithm implementation
function depthFirstSearch(node) {
  if (!node) {
    return;
  }
  
  node.visited = true;
  console.log(node.value);
  
  for (let adjacentNode of node.adjacentNodes) {
    if (!adjacentNode.visited) {
      depthFirstSearch(adjacentNode);
    }
  }
}

// Example usage
// Create nodes
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

// Build the graph
nodeA.addAdjacentNode(nodeB);
nodeA.addAdjacentNode(nodeC);
nodeB.addAdjacentNode(nodeD);
nodeD.addAdjacentNode(nodeE);
nodeE.addAdjacentNode(nodeB);

// Call DFS starting from nodeA
depthFirstSearch(nodeA);
