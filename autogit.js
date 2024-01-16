// Define a class for each node in the graph
class Node {
  constructor(value) {
    this.value = value;
    this.adjacentNodes = [];
  }

  // Method to add an adjacent node
  addAdjacentNode(node) {
    this.adjacentNodes.push(node);
  }
}

// Define the depth-first search function
function depthFirstSearch(node, visited = new Set()) {
  // Print the value of the current node
  console.log(node.value);
  
  // Mark the current node as visited
  visited.add(node);

  // Recursively visit all adjacent nodes
  for (const adjacentNode of node.adjacentNodes) {
    // Skip if the adjacent node has already been visited
    if (!visited.has(adjacentNode)) {
      depthFirstSearch(adjacentNode, visited);
    }
  }
}

// Create nodes for the graph
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');

// Define the connections between nodes
nodeA.addAdjacentNode(nodeB);
nodeA.addAdjacentNode(nodeC);
nodeB.addAdjacentNode(nodeD);
nodeB.addAdjacentNode(nodeE);
nodeC.addAdjacentNode(nodeF);

// Run the depth-first search starting from node A
depthFirstSearch(nodeA);
