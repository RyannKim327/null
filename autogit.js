class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a binary tree
function height(node) {
  if (node === null) {
    return 0;
  }

  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

// Function to calculate the diameter of a binary tree
function diameter(node) {
  if (node === null) {
    return 0;
  }

  // Calculate the height of left and right subtrees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  // Calculate the diameter of left and right subtrees
  const leftDiameter = diameter(node.left);
  const rightDiameter = diameter(node.right);

  // Return the maximum of the following:
  // 1. Diameter of the left subtree
  // 2. Diameter of the right subtree
  // 3. Height of the left subtree + height of the right subtree + 1
  return Math.max(leftHeight + rightHeight + 1, leftDiameter, rightDiameter);
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// Calculate the diameter of the binary tree
const treeDiameter = diameter(root);
console.log(`Diameter of the binary tree is: ${treeDiameter}`);
