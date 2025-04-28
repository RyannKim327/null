// Define the structure of a binary tree node
interface TreeNode {
  value: any; // or specific type, e.g., number
  left?: TreeNode;
  right?: TreeNode;
}

/**
 * Counts the number of leaf nodes in a binary tree.
 * @param node - The root node of the binary tree
 * @returns The number of leaf nodes
 */
function countLeaves(node?: TreeNode): number {
  if (!node) {
    return 0; // Empty node, no leaves here
  }

  // If both children are absent, it's a leaf
  if (!node.left && !node.right) {
    return 1;
  }

  // Recursively count leaves in left and right subtrees
  return countLeaves(node.left) + countLeaves(node.right);
}
const root: TreeNode = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4 },
    right: { value: 5 }
  },
  right: {
    value: 3
  }
};

console.log(countLeaves(root)); // Should output 3 (nodes with values 4, 5, 3)
