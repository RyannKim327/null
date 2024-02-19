// Define a tree node structure
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

// Depth-limited search function
function depthLimitedSearch(node, value, depthLimit, currentDepth = 0) {
  if (currentDepth > depthLimit) {
    return null;
  }

  if (node.value === value) {
    return node;
  }

  if (node.children.length === 0) {
    return null;
  }

  for (let child of node.children) {
    const result = depthLimitedSearch(child, value, depthLimit, currentDepth + 1);
    if (result) {
      return result;
    }
  }

  return null;
}

// Example usage
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const subchild1 = new Node(4);
const subchild2 = new Node(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(subchild1);
child2.addChild(subchild2);

const result = depthLimitedSearch(root, 5, 2);

if (result) {
  console.log("Value found:", result.value);
} else {
  console.log("Value not found within depth limit");
}
