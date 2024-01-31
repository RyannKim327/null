class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  // A recursive helper function to calculate the height of a tree
  function height(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Update the diameter if the current path is longer
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the height of the subtree rooted at the current node
    return Math.max(leftHeight, rightHeight) + 1;
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
