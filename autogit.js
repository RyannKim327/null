// Define a tree node
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  // A recursive helper function to calculate the height of a node
  function height(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Update the diameter if the path passing through the current node is larger
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the height of the current node
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  
  return diameter;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
