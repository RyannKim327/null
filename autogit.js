// Define the structure of a binary tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return 1;
  }

  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

// Count the number of leaf nodes in the binary tree
const numOfLeafNodes = countLeafNodes(root);
console.log(`Number of leaf nodes: ${numOfLeafNodes}`);
