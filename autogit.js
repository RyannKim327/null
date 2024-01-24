class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  const stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Target value not found within the depth limit
}

// Example usage:
// Create a simple tree
const rootNode = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
rootNode.addChild(node2);
rootNode.addChild(node3);
node2.addChild(node4);
node3.addChild(node5);

const targetNode = depthLimitedSearch(rootNode, 5, 2);
console.log(targetNode); // Output: Node { value: 5, children: [] }
