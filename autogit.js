// Node class to create nodes for the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the height of a binary tree
function height(node) {
  if (node == null) {
    return 0;
  }
  return 1 + Math.max(height(node.left), height(node.right));
}

// Function to find the diameter of a binary tree
function diameterOfBinaryTree(root) {
  if (root == null) {
    return 0;
  }

  // Calculate the height of the left and right subtrees
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  // Calculate the diameter of the left and right subtrees recursively
  let leftDiameter = diameterOfBinaryTree(root.left);
  let rightDiameter = diameterOfBinaryTree(root.right);

  // Return the maximum of the three values
  return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}

// Usage example
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
