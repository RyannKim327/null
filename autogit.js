class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
function diameterOfBinaryTree(root) {
  let diameter = 0;

  // Define a helper function to calculate the height of the tree
  function height(node) {
    if (node == null) return 0;

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Calculate the longest path (diameter) passing through the current node
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the height of the subtree rooted at the current node
    return 1 + Math.max(leftHeight, rightHeight);
  }

  // Call the helper function with the root node
  height(root);

  return diameter;
}
// Create the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
const diameter = diameterOfBinaryTree(root);
console.log("Diameter of the binary tree is:", diameter);
