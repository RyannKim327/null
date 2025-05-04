// Define the structure of a tree node
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

// Function to count leaf nodes
function countLeafNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  
  // A leaf node if both left and right are null
  if (!root.left && !root.right) {
    return 1;
  }

  // Recursively count leaves in left and right subtree
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Example usage:

const tree = new TreeNode(1, 
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

console.log(countLeafNodes(tree)); // Output: 3
