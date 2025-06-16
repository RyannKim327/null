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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  // Helper function to compute height and update diameter
  function height(node: TreeNode | null): number {
    if (node === null) return 0;
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // Update diameter at this node
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Height of current node = max height of left/right subtree + 1 for current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  height(root);
  return diameter;
}

// Example Usage

const root = new TreeNode(1, 
                new TreeNode(2, new TreeNode(4), new TreeNode(5)),
                new TreeNode(3));

console.log(diameterOfBinaryTree(root));  // Output: 3
