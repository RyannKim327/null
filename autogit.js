class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(node) {
  if (node === null) {
    // If the node is null, it means we have reached the leaf node and there are no more children.
    return 0;
  } else {
    // Recursively calculate the maximum depth of the left and right subtrees.
    const leftDepth = findMaxDepth(node.left);
    const rightDepth = findMaxDepth(node.right);

    // Return the maximum depth from the current node.
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage:
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Find the maximum depth
const maxDepth = findMaxDepth(root);
console.log("Maximum depth of the binary tree:", maxDepth);
