class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to count the number of leaf nodes
function countLeafNodes(root) {
  if (root === null) {
    return 0;
  }
  
  if (root.left === null && root.right === null) {
    return 1;
  }
  
  const leftCount = countLeafNodes(root.left);
  const rightCount = countLeafNodes(root.right);
  
  return leftCount + rightCount;
}

// Creating a binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Counting the number of leaf nodes
const leafNodeCount = countLeafNodes(root);
console.log('Number of leaf nodes:', leafNodeCount);
