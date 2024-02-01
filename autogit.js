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

  // Calculate the depth of the left and right subtrees
  const leftDepth = depthOfBinaryTree(root.left);
  const rightDepth = depthOfBinaryTree(root.right);

  // Calculate the diameters of the left and right subtrees recursively
  const leftDiameter = diameterOfBinaryTree(root.left);
  const rightDiameter = diameterOfBinaryTree(root.right);

  // Return the maximum of the left diameter, right diameter, and the sum of the depths
  return Math.max(leftDepth + rightDepth, leftDiameter, rightDiameter);
}

function depthOfBinaryTree(root) {
  if (root === null) {
    return 0;
  }
  
  // Calculate the maximum depth of the left and right subtrees recursively
  const leftDepth = depthOfBinaryTree(root.left);
  const rightDepth = depthOfBinaryTree(root.right);

  // Return the maximum depth plus 1 (for the current node)
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
