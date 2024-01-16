class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function countLeafNodes(root) {
  if (!root) {
    return 0; // Empty tree has no leaf nodes
  }
  
  let count = 0;
  
  function traverse(node) {
    if (!node.left && !node.right) {
      count++; // Found a leaf node
    }
    
    if (node.left) {
      traverse(node.left);
    }
    
    if (node.right) {
      traverse(node.right);
    }
  }
  
  traverse(root);
  
  return count;
}

// Example usage:

// Constructing a binary tree
const tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(6);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(5);
tree.right.right = new TreeNode(7);
tree.right.right.right = new TreeNode(9);

const leafNodeCount = countLeafNodes(tree);
console.log('Number of leaf nodes:', leafNodeCount); // Output: 4
