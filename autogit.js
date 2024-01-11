class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (!root) {
    // If the tree is empty or if we've reached a null node, return 0
    return 0;
  }

  if (!root.left && !root.right) {
    // If the current node is a leaf node, return 1
    return 1;
  }

  // Recursively count the leaf nodes in the left and right subtrees
  const leftLeafCount = countLeafNodes(root.left);
  const rightLeafCount = countLeafNodes(root.right);

  // Return the sum of leaf counts in both subtrees
  return leftLeafCount + rightLeafCount;
}

// Create a binary tree for testing
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.right.right = new Node(8);

// Find the number of leaf nodes
const leafCount = countLeafNodes(root);
console.log("Leaf Count:", leafCount);
