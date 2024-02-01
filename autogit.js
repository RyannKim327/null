// Define the TreeNode class
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Function to calculate the sum of all nodes
function sumBinaryTree(root) {
  if (root === null) {
    return 0; // Base case: an empty tree has a sum of 0
  }
  
  // Recursively calculate the sum of nodes in the left and right subtrees
  const sumLeft = sumBinaryTree(root.left);
  const sumRight = sumBinaryTree(root.right);
  
  // Return the sum of the root and the sums of the subtrees
  return root.val + sumLeft + sumRight;
}

// Create a sample binary tree
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

// Calculate the sum of all nodes in the binary tree
const sum = sumBinaryTree(tree);
console.log("Sum of all nodes:", sum);
