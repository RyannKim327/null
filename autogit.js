class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  if (!root) {
    return 0;
  }

  // Calculate the height of the left and right subtrees
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  // Calculate the diameter recursively for the left and right subtrees
  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);

  // Return the maximum of (left subtree diameter, right subtree diameter, longest path passing through the root)
  return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}

function height(node) {
  if (!node) {
    return 0;
  }

  // Recursively calculate the height of the left and right subtrees
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

console.log("Diameter of the binary tree:", diameterOfBinaryTree(root));
