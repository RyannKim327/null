class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateSum(root) {
  if (root === null) {
    return 0; // Return 0 for an empty tree
  } else {
    return (
      root.value +
      calculateSum(root.left) +
      calculateSum(root.right)
    ); // Recursively calculate sum of left and right subtrees
  }
}

// Example usage:
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const sum = calculateSum(root);
console.log('Sum of all nodes:', sum);
