class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(node) {
  if (node === null) {
    return 0;
  } else {
    const leftDepth = findMaxDepth(node.left);
    const rightDepth = findMaxDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage:

// Create the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);

// Find the maximum depth
const maxDepth = findMaxDepth(root);
console.log("Maximum depth of the binary tree:", maxDepth);
