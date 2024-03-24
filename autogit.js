class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the sum of all nodes in a binary tree
function sumBinaryTree(root) {
  if (!root) {
    return 0;
  }

  let sum = root.value;

  if (root.left) {
    sum += sumBinaryTree(root.left);
  }

  if (root.right) {
    sum += sumBinaryTree(root.right);
  }

  return sum;
}

// Example binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the sum of all nodes in the binary tree
const totalSum = sumBinaryTree(root);
console.log(totalSum); // Output: 15
