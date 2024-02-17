class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateNodeSum(root) {
  if (root === null) {
    return 0;
  }

  let sum = root.value;
  sum += calculateNodeSum(root.left);
  sum += calculateNodeSum(root.right);

  return sum;
}

// Sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const treeSum = calculateNodeSum(root);

console.log("Sum of all nodes in the binary tree:", treeSum);
