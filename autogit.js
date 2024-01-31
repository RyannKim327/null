// Represents a node in a tree/graph
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // Add a child node
  addChild(child) {
    this.children.push(child);
  }
}

// Depth-limited search algorithm
function depthLimitedSearch(node, target, depthLimit) {
  if (node.value === target) {
    return true; // Found the target
  }

  if (depthLimit === 0) {
    return false; // Reached depth limit
  }

  for (let child of node.children) {
    if (depthLimitedSearch(child, target, depthLimit - 1)) {
      return true; // Found the target in child node
    }
  }

  return false; // Target not found
}

// Usage & Example
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);

console.log(depthLimitedSearch(root, 4, 2)); // Output: true
console.log(depthLimitedSearch(root, 5, 1)); // Output: false
