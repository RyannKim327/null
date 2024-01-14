class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sumBinaryTree(root) {
  if (!root) {
    return 0;
  }

  let sum = 0;

  function dfs(node) {
    sum += node.val;
    if (node.left) {
      dfs(node.left);
    }
    if (node.right) {
      dfs(node.right);
    }
  }

  dfs(root);

  return sum;
}

// Example usage:

//     1
//    / \
//   2   3
//  / \   \
// 4   5   6

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

console.log(sumBinaryTree(tree)); // Output: 21 (1 + 2 + 4 + 5 + 3 + 6)
