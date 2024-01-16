// Define the Node class with a value and children array
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  // Add a child to the node
  addChild(child) {
    this.children.push(child);
  }
}

// Depth-limited search algorithm
function depthLimitedSearch(node, target, depthLimit) {
  if (node.value === target) {
    return true; // Found the target
  } else if (depthLimit === 0) {
    return false; // Reached depth limit without finding the target
  } else {
    for (let child of node.children) {
      if (depthLimitedSearch(child, target, depthLimit - 1)) {
        return true; // Found the target in the child nodes
      }
    }
    return false; // Target not found in any child nodes
  }
}

// Create a sample tree
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);
node3.addChild(node5);

// Test the depth-limited search
console.log(depthLimitedSearch(root, 4, 3)); // Output: true
