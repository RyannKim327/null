class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the height of a tree
function height(node) {
  if (node === null) {
    return 0;
  }

  // Recursively calculate the height of the left and right sub-trees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  // Return the maximum height plus one
  return Math.max(leftHeight, rightHeight) + 1;
}

// Function to find the diameter of a binary tree
function diameter(node) {
  if (node === null) {
    return 0;
  }

  // Calculate the height of the left and right sub-trees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  // Calculate the diameter recursively for the left and right sub-trees
  const leftDiameter = diameter(node.left);
  const rightDiameter = diameter(node.right);

  // Return the maximum of the following three values:
  // 1. Diameter of the left sub-tree
  // 2. Diameter of the right sub-tree
  // 3. Height of the left sub-tree + Height of the right sub-tree + 1
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Create a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.left.left.right = new Node(9);

// Calculate the diameter of the binary tree
const treeDiameter = diameter(root);
console.log(`The diameter of the binary tree is: ${treeDiameter}`);
