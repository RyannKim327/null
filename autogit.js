class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (!root) {
    return 0; // Base case: empty tree
  } else if (!root.left && !root.right) {
    return 1; // Base case: leaf node
  } else {
    const leftCount = countLeafNodes(root.left);
    const rightCount = countLeafNodes(root.right);
    return leftCount + rightCount;
  }
}

// Test the function
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(countLeafNodes(root)); // Output: 3
