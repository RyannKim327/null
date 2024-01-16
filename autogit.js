class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  addChild(node) {
    this.children.push(node);
  }
}

function depthLimitedSearch(node, target, depthLimit) {
  if (node.value === target) {
    return node;
  }

  if (depthLimit === 0) {
    return null;
  }

  for (let child of node.children) {
    const result = depthLimitedSearch(child, target, depthLimit - 1);
    if (result !== null) {
      return result;
    }
  }

  return null;
}

// Usage example:
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const grandChild1 = new Node(4);
const grandChild2 = new Node(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandChild1);
child2.addChild(grandChild2);

console.log(depthLimitedSearch(root, 5, 3));
