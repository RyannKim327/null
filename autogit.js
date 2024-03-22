// Definition for a binary tree node
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the height of a binary tree
function height(node) {
  if (node === null) {
    return 0;
  }

  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  return 1 + Math.max(leftHeight, rightHeight);
}

// Function to find the diameter of a binary tree
function diameterOfBinaryTree(root) {
  let diameter = 0;

  function diameterHelper(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    diameter = Math.max(diameter, leftHeight + rightHeight);

    diameterHelper(node.left);
    diameterHelper(node.right);
  }

  diameterHelper(root);

  return diameter;
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
