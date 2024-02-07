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

  // Return the maximum depth between the left and right subtrees, plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

const depth = maxDepth(root);
console.log("Maximum depth:", depth); // Output: Maximum depth: 3
