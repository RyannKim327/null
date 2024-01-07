// Define a class to represent a graph node
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

// Implement the depth-first search algorithm
function depthFirstSearch(root, target) {
  // Base case: If the current node is null or matches the target, return the node
  if (root === null || root.value === target) {
    return root;
  }

  // Iterate through each child of the current node
  for (let child of root.children) {
    // Call the depthFirstSearch function recursively on each child
    const result = depthFirstSearch(child, target);

    // If the target is found in any of the recursive calls, return the result
    if (result !== null) {
      return result;
    }
  }

  // If the target is not found, return null
  return null;
}

// Usage example:
// Create a sample graph
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");

nodeA.addChild(nodeB);
nodeA.addChild(nodeC);
nodeB.addChild(nodeD);
nodeB.addChild(nodeE);
nodeC.addChild(nodeF);

// Call the depthFirstSearch function to search for a target value
const targetNode = depthFirstSearch(nodeA, "E");
if (targetNode !== null) {
  console.log("Target node found: ", targetNode.value);
} else {
  console.log("Target node not found");
}
