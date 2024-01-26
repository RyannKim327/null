class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getMaxDepth(node) {
  if (node === null) {
    return 0;
  } else {
    const leftDepth = getMaxDepth(node.left);
    const rightDepth = getMaxDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

const maxDepth = getMaxDepth(root);
console.log(`Maximum depth of the binary tree is ${maxDepth}`);
