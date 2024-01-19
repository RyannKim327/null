class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function height(node) {
  if (node === null) {
    return 0;
  }
  
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

function diameter(node) {
  if (node === null) {
    return 0;
  }

  // Get the heights of the left and right subtrees
  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  // Get the diameter of the left and right subtrees recursively
  const leftDiameter = diameter(node.left);
  const rightDiameter = diameter(node.right);

  // Return the maximum of the following:
  // 1. Diameter of the left subtree
  // 2. Diameter of the right subtree
  // 3. Longest path that passes through the root
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(diameter(root)); // Output: 5
