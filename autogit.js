// Node definition
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to find the height of a node
function height(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(height(node.left), height(node.right));
}

// Function to find the diameter of a binary tree
function diameter(root) {
  if (root === null) {
    return 0;
  }

  // Get the height of the left and right subtrees
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  // Get the diameter of the left and right subtrees recursively
  const leftDiameter = diameter(root.left);
  const rightDiameter = diameter(root.right);

  // The diameter can be either:
  // 1. The longest path through the root node
  // 2. The maximum diameter of the left subtree
  // 3. The maximum diameter of the right subtree
  return Math.max(leftHeight + rightHeight + 1, leftDiameter, rightDiameter);
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("The diameter of the binary tree is: " + diameter(root));
