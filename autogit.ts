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

function countLeafNodes(node: TreeNode | null): number {
  if (node === null) {
    return 0; // No node, no leaf
  }
  if (node.left === null && node.right === null) {
    return 1; // This node is a leaf
  }
  // Recur on left and right subtrees
  return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(countLeafNodes(tree)); // Outputs: 3 (nodes 4, 5, and 3 are leaves)
