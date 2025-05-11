class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  
  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function countLeafNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  // If both left and right children are null, this is a leaf node
  if (root.left === null && root.right === null) {
    return 1;
  }

  // Otherwise, recursively count leaf nodes in left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage:
const tree = new TreeNode(1,
  new TreeNode(2,
    new TreeNode(4),
    null
  ),
  new TreeNode(3)
);

console.log(countLeafNodes(tree));  // Output: 2
