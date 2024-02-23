class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

function depthLimitedSearch(node, target, depthLimit) {
  if (node.value === target) {
    return true;
  }

  if (depthLimit === 0) {
    return false;
  }

  for (let child of node.children) {
    if (depthLimitedSearch(child, target, depthLimit - 1)) {
      return true;
    }
  }

  return false;
}

// Example tree structure
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);

// Search for value 5 with depth limit of 2
console.log(depthLimitedSearch(root, 5, 2)); // Output: true

// Search for value 5 with depth limit of 1
console.log(depthLimitedSearch(root, 5, 1)); // Output: false
