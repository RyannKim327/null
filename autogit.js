// Define a TreeNode class for representing the nodes in the search tree
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

// Depth-Limited Search function
function depthLimitedSearch(node, target, depthLimit) {
  // Base case: If the current node contains the target value, return true
  if (node.value === target) {
    return true;
  }
  
  // Base case: If the depth limit has been reached, return false
  if (depthLimit === 0) {
    return false;
  }

  // Recursive case: Search the children nodes within the depth limit
  for (let child of node.children) {
    // Recursively call depthLimitedSearch on each child node
    if (depthLimitedSearch(child, target, depthLimit - 1)) {
      return true; // If found in any of the child nodes, return true
    }
  }

  return false; // If not found in any child nodes, return false
}

// Usage example
// Create a sample tree
const rootNode = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);

rootNode.addChild(node2);
rootNode.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);
node4.addChild(node6);

// Call depthLimitedSearch with a depth limit of 2
console.log(depthLimitedSearch(rootNode, 6, 2)); // Output: true
console.log(depthLimitedSearch(rootNode, 7, 2)); // Output: false
