// Binary tree node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Calculate the diameter of a binary tree
function calculateDiameter(root) {
  // Check if the tree is empty
  if (root === null) {
    return 0;
  }

  // Get the height of the left and right subtrees
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  // Get the diameter of the left and right subtrees
  const leftDiameter = calculateDiameter(root.left);
  const rightDiameter = calculateDiameter(root.right);

  // Return the maximum of the following:
  // 1) Diameter of the left subtree
  // 2) Diameter of the right subtree
  // 3) Longest path between two leaves that passes through the root (left height + right height + 1)
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Calculate the height of a binary tree
function height(node) {
  // Base case: empty tree has height 0
  if (node === null) {
    return 0;
  }

  // Recursively compute the height of the left and right subtrees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  // Return the maximum height plus 1
  return Math.max(leftHeight, rightHeight) + 1;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Diameter of the binary tree is: " + calculateDiameter(root));
