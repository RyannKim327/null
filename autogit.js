class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the height of a binary tree
function height(node) {
  if (node === null) {
    return 0;
  }
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

// Function to find the diameter of a binary tree
function diameter(node) {
  if (node === null) {
    return 0;
  }

  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  const leftDiameter = diameter(node.left);
  const rightDiameter = diameter(node.right);

  // Return the maximum of:
  // 1. Diameter of left subtree
  // 2. Diameter of right subtree
  // 3. Longest path that passes through the root
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Example usage:

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Find the diameter of the binary tree
const treeDiameter = diameter(root);
console.log("Diameter of the binary tree: " + treeDiameter);
