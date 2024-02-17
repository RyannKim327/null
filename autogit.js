class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
    return this;
  }
}

function depthLimitedSearchIterative(root, target, limit) {
  let stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.name === target) {
      return node;
    }

    if (depth < limit) {
      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null;
}

// Usage
let rootNode = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");
let nodeD = new Node("D");

rootNode.addChild(nodeB);
rootNode.addChild(nodeC);
nodeB.addChild(nodeD);

let result = depthLimitedSearchIterative(rootNode, "D", 2);
console.log(result);
