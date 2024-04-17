class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function depthLimitedSearch(node, target, depthLimit, currentDepth = 0) {
  if (currentDepth > depthLimit) {
    return null; // Maximum depth reached
  }

  if (node.value === target) {
    return node; // Target found
  }

  for (const child of node.children) {
    const result = depthLimitedSearch(child, target, depthLimit, currentDepth + 1);
    if (result) {
      return result;
    }
  }

  return null; // Target not found within depth limit
}

// Example usage
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);

const target = 4;
const depthLimit = 2;
const result = depthLimitedSearch(root, target, depthLimit);

if (result) {
  console.log(`Target ${target} found within depth limit ${depthLimit}`);
} else {
  console.log(`Target ${target} not found within depth limit ${depthLimit}`);
}
