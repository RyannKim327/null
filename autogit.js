class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sumBinaryTree(root) {
  if (root === null) {
    return 0;
  }

  // Compute the sum of values in the current node and its subtrees
  const currentSum = root.val;
  const leftSum = sumBinaryTree(root.left);
  const rightSum = sumBinaryTree(root.right);

  return currentSum + leftSum + rightSum;
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const sum = sumBinaryTree(root);
console.log("Sum of all nodes:", sum);
