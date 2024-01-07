class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getMaxDepth(node) {
  // Base case: return 0 if the node is null
  if (node === null) {
    return 0;
  }

  // Recursive case: compute the max depth of the left and right subtrees
  const leftDepth = getMaxDepth(node.left);
  const rightDepth = getMaxDepth(node.right);

  // Return the maximum depth between the left subtree and right subtree,
  // plus 1 for the current node
  return Math.max(leftDepth, rightDepth) + 1;
}
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Get the maximum depth of the binary tree
const maxDepth = getMaxDepth(root);
console.log('Maximum depth:', maxDepth);
