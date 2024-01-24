class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  if (root === null) {
    return 0;
  }

  // Calculate the height of the left and right subtrees
  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  // Calculate the diameter recursively
  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);

  // Return the maximum of the following three values:
  // 1. Diameter of the left subtree
  // 2. Diameter of the right subtree
  // 3. Length of the longest path that passes through the root
  return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}

function height(node) {
  if (node === null) {
    return 0;
  }

  // Calculate the height recursively
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  // Return the height of the current node
  return 1 + Math.max(leftHeight, rightHeight);
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const diameter = diameterOfBinaryTree(root);
console.log("Diameter of the binary tree:", diameter);
