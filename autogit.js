class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function sumBinaryTree(root) {
  if (root === null) {
    return 0;
  }
  
  return root.val + sumBinaryTree(root.left) + sumBinaryTree(root.right);
}
// Create a binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Find the sum of all nodes
let sum = sumBinaryTree(root);
console.log("Sum of all nodes:", sum); // Output: 28
