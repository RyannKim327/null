// Define the structure for a TreeNode
interface TreeNode {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;
}

// Recursive function to count leaves
function countLeaves(node: TreeNode | null): number {
  if (node === null) {
    return 0; // Empty node contributes no leaves
  }
  if (node.left === null && node.right === null) {
    return 1; // Leaf node
  }
  // Sum leaves in left and right subtrees
  return countLeaves(node.left) + countLeaves(node.right);
}

// Example
const tree: TreeNode = {
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

console.log(countLeaves(tree)); // Output: 3
