class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sumBinaryTree(root) {
  if (root === null) {
    return 0; // Base case: empty tree has a sum of 0
  }

  const leftSum = sumBinaryTree(root.left);
  const rightSum = sumBinaryTree(root.right);

  return root.val + leftSum + rightSum; // Sum of current node and its subtrees
}

// Example tree:       1
//                   /   \
//                  2     3
//                 / \   / \
//                4   5 6   7

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

const sum = sumBinaryTree(tree);
console.log(sum); // Output: 28
