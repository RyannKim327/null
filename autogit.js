class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a binary tree
function height(node) {
  if (node === null)
    return 0;
  else {
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// Function to calculate the diameter of a binary tree
function diameter(root) {
  if (root === null)
    return 0;

  // Get the height of the left and right subtrees
  let leftHeight = height(root.left);
  let rightHeight = height(root.right);

  // Get the diameter of the left and right subtrees
  let leftDiameter = diameter(root.left);
  let rightDiameter = diameter(root.right);

  // Return the maximum of:
  // 1. Diameter of the left subtree
  // 2. Diameter of the right subtree
  // 3. Length of the longest path that passes through the root
  return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
}

// Create a binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

// Calculate the diameter of the binary tree
let treeDiameter = diameter(root);
console.log("Diameter of the binary tree:", treeDiameter);
