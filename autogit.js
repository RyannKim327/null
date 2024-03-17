// Definition for a binary tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1; // Leaf node
  }

  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

const numberOfLeafNodes = countLeafNodes(root);
console.log(numberOfLeafNodes); // Output: 3
