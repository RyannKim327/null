class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findSum(root) {
  if (root === null) {
    return 0; // Return 0 for an empty tree or leaf node
  }

  const leftSum = findSum(root.left); // Recursively calculate sum of left subtree
  const rightSum = findSum(root.right); // Recursively calculate sum of right subtree

  return root.val + leftSum + rightSum; // Return the sum of current node and its subtrees
}

// Usage example:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

const sum = findSum(tree);
console.log(sum); // Output: 15
