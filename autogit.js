class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (root === null) {
    return 0; // Empty tree
  }

  if (root.left === null && root.right === null) {
    return 1; // Leaf node
  }

  // Recursively count leaf nodes in the left and right subtrees
  return countLeafNodes(root.left) + countLeafNodes(root.right);
}

// Create a binary tree
const rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);
rootNode.right.left = new TreeNode(6);

// Calculate the number of leaf nodes
const numLeafNodes = countLeafNodes(rootNode);
console.log("Number of leaf nodes:", numLeafNodes);
