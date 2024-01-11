class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumOfNodes(root) {
  if (root === null) {
    // Empty tree, sum is 0
    return 0;
  }
  // Sum of current node value and the sum of nodes in the left and right subtrees
  return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}
// Create a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Calculate the sum of all nodes
const sum = sumOfNodes(root);
console.log("Sum of all nodes:", sum); // Output: Sum of all nodes: 28
       1
     /   \
    2     3
   / \   / \
  4   5 6   7 
