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
  }

  const leftDepth = findMaxDepth(node.left);
  const rightDepth = findMaxDepth(node.right);

  // Return the maximum depth between the left and right subtrees, plus 1 for the root node
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const maxDepth = findMaxDepth(root);
console.log("Maximum depth:", maxDepth);
