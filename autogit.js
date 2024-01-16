class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateMaxDepth(node) {
  if (!node) {
    return 0; // Return 0 for an empty tree
  }

  const leftDepth = calculateMaxDepth(node.left);
  const rightDepth = calculateMaxDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1; // Add 1 to the maximum depth of the left and right subtrees
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const maxDepth = calculateMaxDepth(root);
console.log('Maximum depth:', maxDepth);
