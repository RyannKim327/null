// Node class definition
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the height of a binary tree
function height(node) {
  if (node === null)
    return 0;

  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

// Function to calculate the diameter of a binary tree
function diameter(node) {
  if (node === null)
    return 0;

  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  const leftDiameter = diameter(node.left);
  const rightDiameter = diameter(node.right);

  // Maximum between:
  // 1) Diameter of the left subtree
  // 2) Diameter of the right subtree
  // 3) Longest path that passes through the root
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Diameter of the binary tree is:", diameter(root));
