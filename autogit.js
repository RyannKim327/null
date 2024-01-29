class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(node) {
  if (node === null) {
    return 0;
  } else {
    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
}
// Create the binary tree
const rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);

// Find maximum depth
const depth = maxDepth(rootNode);
console.log(`Maximum depth of the binary tree: ${depth}`);
