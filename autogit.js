class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  if (root === null) {
    return 0;
  }

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);

  // The diameter can be either passing through the root (i.e., leftHeight + rightHeight + 1)
  // or it can lie entirely in the left or right subtree
  const totalDiameter = Math.max(leftHeight + rightHeight + 1, leftDiameter, rightDiameter);

  return totalDiameter;
}

function height(node) {
  if (node === null) {
    return 0;
  }
  
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Diameter of the binary tree is:", diameterOfBinaryTree(root));
