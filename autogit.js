class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(node) {
  if (node === null) {
    return 0;
  }
  
  if (node.left === null && node.right === null) {
    return 1;
  }
  
  return countLeafNodes(node.left) + countLeafNodes(node.right);
}
// Create the binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Call the function to count leaf nodes
let leafNodeCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafNodeCount);
