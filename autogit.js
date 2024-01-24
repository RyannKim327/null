class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sumBinaryTree(root) {
  // Base case: return 0 for an empty node (null)
  if (root === null) {
    return 0;
  }

  // Recursively calculate the sum of the left and right subtrees
  const leftSum = sumBinaryTree(root.left);
  const rightSum = sumBinaryTree(root.right);

  // Add the current node's value to the sum of both subtrees
  return root.val + leftSum + rightSum;
}
// Create the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Calculate the sum of all nodes
const sum = sumBinaryTree(root);
console.log(sum); // Output: 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
