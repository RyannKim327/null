// Node object
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a given node
function height(node) {
  if (node === null) {
    return 0;
  }
  return 1 + Math.max(height(node.left), height(node.right));
}

// Function to calculate the diameter of a binary tree
function diameter(node) {
  if (node === null) {
    return 0;
  }

  // Calculate the height of left and right subtrees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  // Calculate the diameter recursively for left and right subtrees
  const leftDiameter = diameter(node.left);
  const rightDiameter = diameter(node.right);

  // Find the maximum diameter among left subtree, right subtree, and through the root
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Example usage

// Creating a binary tree
const root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.left = new Node(6);
root.right.right = new Node(7);

// Calculate diameter of the binary tree
const treeDiameter = diameter(root);

console.log('Diameter of the binary tree:', treeDiameter);
