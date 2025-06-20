// Definition of a binary tree node
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  // Variable to store the maximum diameter found
  let maxDiameter = 0;

  // Helper function to calculate the height of the tree and update the diameter
  function height(node: TreeNode | null): number {
    if (node === null) {
      return 0; // Base case: height of an empty tree is 0
    }

    // Recursively calculate the height of the left and right subtrees
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Update the maximum diameter: it's the sum of heights of left and right subtrees
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);

    // Return the height of the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // Start the recursion to calculate height and update maxDiameter
  height(root);

  // Return the maximum diameter found
  return maxDiameter;
}
// Constructing a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Calculate the diameter of the binary tree
console.log(diameterOfBinaryTree(root)); // Output: 3
