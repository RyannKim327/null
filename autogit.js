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
  
  // If the current node is a leaf node, return 1
  if (!root.left && !root.right) {
    return 1;
  } else {
    // Recursively count the leaf nodes in the left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
  }
}

// Test the function
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log("Number of leaf nodes:", countLeafNodes(root));
