class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  const leftCount = countLeafNodes(root.left);
  const rightCount = countLeafNodes(root.right);

  return leftCount + rightCount;
}

// Example binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes: ", leafNodeCount);
