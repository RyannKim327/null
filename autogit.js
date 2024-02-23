class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function depthLimitedSearchIterative(root, target, maxDepth) {
  if (!root) {
    return null;
  }

  let stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (depth <= maxDepth) {
      if (node.value === target) {
        return node;
      }

      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null;
}

// Example usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);

let result = depthLimitedSearchIterative(root, 5, 2);

if (result) {
  console.log(`Node with value 5 found: ${result}`);
} else {
  console.log("Node not found.");
}
