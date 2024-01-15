class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  // Base case: empty tree
  if (root === null) {
    return 0;
  }

  // Recursive calls to find the height of the left and right subtrees
  const leftHeight = heightOfBinaryTree(root.left);
  const rightHeight = heightOfBinaryTree(root.right);

  // Recursive calls to find the diameter of the left and right subtrees
  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);

  // Return the maximum of:
  // 1. Diameter of the left and right subtrees
  // 2. (Height of the left subtree + Height of the right subtree + 1)
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

function heightOfBinaryTree(root) {
  // Base case: empty tree
  if (root === null) {
    return 0;
  }

  // Recursive calls to find the height of the left and right subtrees
  const leftHeight = heightOfBinaryTree(root.left);
  const rightHeight = heightOfBinaryTree(root.right);

  // Return the maximum of the left and right subtrees heights, plus 1 for the current node
  return Math.max(leftHeight, rightHeight) + 1;
}
// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Find the diameter of the binary tree
const diameter = diameterOfBinaryTree(root);
console.log("Diameter of the binary tree:", diameter);
