class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

function depthLimitedSearch(root, target, limit) {
  let stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
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

// Example Usage
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

root.addChild(node2);
root.addChild(node3);
node3.addChild(node4);

const targetNode = depthLimitedSearch(root, 4, 2);

if (targetNode) {
  console.log("Node found: ", targetNode.value);
} else {
  console.log("Node not found within depth limit.");
}
