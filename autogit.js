class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(root) {
  if (root === null) {
    // Base case: an empty tree has a depth of 0
    return 0;
  } else {
    // Recursively find the maximum depth of the left and right subtrees
    let leftDepth = findMaxDepth(root.left);
    let rightDepth = findMaxDepth(root.right);

    // Return the maximum depth of the tree
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage:

// Create the binary tree
let tree = new TreeNode(3);
tree.left = new TreeNode(9);
tree.right = new TreeNode(20);
tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

// Find the maximum depth of the tree
let maxDepth = findMaxDepth(tree);
console.log("Maximum depth of the binary tree:", maxDepth);
