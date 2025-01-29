interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

function maxDepth<T>(root: TreeNode<T> | null): number {
  if (root === null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
const tree: TreeNode<number> = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 4,
    left: null,
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
};

console.log(maxDepth(tree)); // Output: 3
