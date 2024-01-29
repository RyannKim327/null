// Definition of a binary tree node
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
  } else if (root.left === null && root.right === null) {
    return 1; // Found a leaf node
  } else {
    // Recursively count the leaf nodes in the left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
  }
}

// Example usage
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);

console.log(countLeafNodes(tree)); // Output: 3
