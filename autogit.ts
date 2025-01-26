interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0; // empty tree has depth 0
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1; // add 1 for the current node
}

// Example usage:
const tree: TreeNode = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: {
      value: 5,
      left: null,
      right: null
    }
  }
};

console.log(maxDepth(tree)); // Output: 3
