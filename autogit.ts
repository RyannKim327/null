// Define the binary tree node type
type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

// Recursive function to sum all nodes
function sumTree(node: TreeNode | null): number {
  if (node === null) {
    return 0; // base case: empty node contributes 0
  }
  // sum current node's value plus sums of left and right subtrees
  return node.val + sumTree(node.left) + sumTree(node.right);
}

// Example usage:
const root: TreeNode = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};

console.log(sumTree(root)); // Output should be 6
