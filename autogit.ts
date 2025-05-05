// Define the node structure
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

// Recursive function to sum all nodes
function sumOfNodes(root: TreeNode | null): number {
  if (root === null) return 0;

  // Sum current node + left subtree + right subtree
  return root.val + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Example usage
const tree = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3), new TreeNode(7)),
  new TreeNode(15, null, new TreeNode(18))
);

console.log(sumOfNodes(tree)); // Output: 58
