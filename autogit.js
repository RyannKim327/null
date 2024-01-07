class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

// Iterative Depth-Limited Search algorithm
function depthLimitedSearchIterative(root, target, depthLimit) {
  if (root === null) return null;

  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null;
}

// Usage example
const tree = new Node(1, [
  new Node(2, [new Node(4)]),
  new Node(3, [new Node(5), new Node(6)])
]);

const targetNode = depthLimitedSearchIterative(tree, 5, 3);

if (targetNode !== null) {
  console.log('Node found:', targetNode.value);
} else {
  console.log('Node not found');
}
