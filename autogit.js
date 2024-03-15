class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(node) {
  if (node === null) {
    return 0;
  }

  const leftDepth = maxDepth(node.left);
  const rightDepth = maxDepth(node.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

// Example binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const depth = maxDepth(root);
console.log(depth); // Output: 3
