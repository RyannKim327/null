class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  addChild(node) {
    this.children.push(node);
  }
}
function depthFirstSearch(root, target) {
  // Base case: if the current node is null or matches the target, return the node
  if (root === null || root.value === target) {
    return root;
  }
  
  // Recursively search in depth-first manner through each child
  for (let child of root.children) {
    const result = depthFirstSearch(child, target);
    if (result !== null) {
      return result;
    }
  }
  
  // If the target is not found, return null
  return null;
}
// Build a graph
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');
const nodeF = new Node('F');

nodeA.addChild(nodeB);
nodeA.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);

// Perform depth-first search
const targetNode = depthFirstSearch(nodeA, 'E');

// Print the result
if (targetNode !== null) {
  console.log(`Target node ${targetNode.value} found`);
} else {
  console.log('Target node not found');
}
