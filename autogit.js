class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (root === null) {
    return 0;
  }
  
  if (root.left === null && root.right === null) {
    return 1;
  }
  
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}
// Create nodes
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);

// Connect nodes
root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

// Count leaf nodes
const leafCount = countLeafNodes(root);
console.log(`Number of leaf nodes: ${leafCount}`);
