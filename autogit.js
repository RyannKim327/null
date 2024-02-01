function Node(value) {
  this.value = value;
  this.adjacentNodes = [];
}

// Depth-First Search
function depthFirstSearch(startNode) {
  const stack = []; // Stack to keep track of nodes
  const visited = new Set(); // Set to keep track of visited nodes

  stack.push(startNode); // Push the start node to stack

  while (stack.length > 0) {
    const currentNode = stack.pop(); // Pop the top node from stack
    visited.add(currentNode);

    // Process current node (you can modify this part according to your requirements)
    console.log(currentNode.value);

    // Push all the unvisited adjacent nodes to stack
    for (const adjacentNode of currentNode.adjacentNodes) {
      if (!visited.has(adjacentNode)) {
        stack.push(adjacentNode);
      }
    }
  }
}
// Create nodes and define connections
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");

nodeA.adjacentNodes.push(nodeB, nodeD);
nodeB.adjacentNodes.push(nodeC, nodeE);
nodeC.adjacentNodes.push(nodeF);
nodeD.adjacentNodes.push(nodeE);

// Call depth-first search starting from nodeA
depthFirstSearch(nodeA);
function Node(value) {
  this.value = value;
  this.adjacentNodes = [];
}

// Recursive Depth-First Search
function traverseDFS(node, visited = new Set()) {
  console.log(node.value);
  visited.add(node);

  for (const adjacentNode of node.adjacentNodes) {
    if (!visited.has(adjacentNode)) {
      traverseDFS(adjacentNode, visited);
    }
  }
}
// Create nodes and define connections (same as previous example)
// ...

// Call the recursive DFS starting from nodeA
traverseDFS(nodeA);
