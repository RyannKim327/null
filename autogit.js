class TreeNode {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  // Helper function to calculate the height of a node
  function height(node) {
    if (node == null) {
      return 0;
    }

    let leftHeight = height(node.left);
    let rightHeight = height(node.right);

    // Update the diameter if the sum of left and right heights is greater
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the height of the current node
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  return diameter;
}

// Create a binary tree
let rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(rootNode)); // Output: 3
