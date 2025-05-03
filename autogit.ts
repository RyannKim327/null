// Define a binary tree node type
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  
  constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function countLeafNodes(root: TreeNode | null): number {
  if (root === null) return 0;

  // If node has no children, it's a leaf
  if (root.left === null && root.right === null) {
    return 1;
  }

  // Recursively count in left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}
const tree = new TreeNode(1, 
  new TreeNode(2, new TreeNode(4), new TreeNode(5)), 
  new TreeNode(3)
);

console.log(countLeafNodes(tree)); // Output: 3 (nodes 4, 5, and 3)
