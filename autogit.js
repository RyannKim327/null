class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findSum(root) {
  // Base case: if the root is null, return 0
  if (root === null) {
    return 0;
  }

  // Recursively calculate the sum of all nodes in the left and right subtrees
  const leftSum = findSum(root.left);
  const rightSum = findSum(root.right);

  // Return the sum of the current node's value plus the sums of left and right subtrees
  return root.value + leftSum + rightSum;
}
// Creating a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Finding the sum of all nodes
const sum = findSum(root);
console.log("Sum of all nodes:", sum);
