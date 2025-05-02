class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T, left: TreeNode<T> | null = null, right: TreeNode<T> | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function countLeafNodes<T>(root: TreeNode<T> | null): number {
  if (root === null) return 0;

  // If both children are null, it's a leaf node
  if (root.left === null && root.right === null) return 1;

  // Recursively count leaf nodes in left and right subtree
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}
const tree = new TreeNode(1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(countLeafNodes(tree)); // Output: 3 (nodes 4, 5, and 3 are leaves)
