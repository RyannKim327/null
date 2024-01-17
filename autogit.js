class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sumBinaryTree(root) {
  // Base case: empty tree
  if (root === null) {
    return 0;
  }

  // Recursively calculate the sum of left and right subtrees
  const leftSum = sumBinaryTree(root.left);
  const rightSum = sumBinaryTree(root.right);

  // Add the node value to the sum of its children
  return root.val + leftSum + rightSum;
}

// Example usage:
//     1
//    / \
//   2   3
//  / \   \
// 4   5   6

const tree = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    new TreeNode(5)),
  new TreeNode(3,
    null,
    new TreeNode(6))
);

console.log(sumBinaryTree(tree)); // Output: 21
