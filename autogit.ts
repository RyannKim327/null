// Define the structure for a tree node
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

// Recursive function to count leaf nodes
function countLeaves(node: TreeNode | null): number {
  if (!node) {
    return 0;
  }
  
  // If both left and right are null, it's a leaf node
  if (!node.left && !node.right) {
    return 1;
  }
  
  // Otherwise, recurse for left and right subtrees
  return countLeaves(node.left) + countLeaves(node.right);
}

// Example usage:

// Create a tree:
//       1
//      / \
//     2   3
//        / \
//       4   5

const tree = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3, new TreeNode(4), new TreeNode(5))
);

console.log(countLeaves(tree)); // Output: 3 (nodes 2, 4, 5 are leaves)
