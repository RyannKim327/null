// Define the structure of a node in the binary tree
interface TreeNode {
  value: any; // or you can specify a specific type
  left: TreeNode | null;
  right: TreeNode | null;
}

// Recursive function to count leaf nodes
function countLeaves(node: TreeNode | null): number {
  if (node === null) {
    // Empty node, contributes 0
    return 0;
  }

  if (node.left === null && node.right === null) {
    // Leaf node
    return 1;
  }

  // Sum of leaf counts in left and right subtrees
  return countLeaves(node.left) + countLeaves(node.right);
}

// Example usage:
const root: TreeNode = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: {
      value: 4,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: null,
    right: null
  }
};

console.log(countLeaves(root)); // Output: 3
