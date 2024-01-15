// Define a Node class to represent each node of the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to calculate the height of a binary tree
function height(node) {
  if (node === null) {
    return 0;
  } else {
    // Recursively calculate the height of left and right subtrees
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    
    // Return the maximum of left height and right height, plus 1
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

// Function to calculate the diameter of a binary tree
function diameter(node) {
  if (node === null) {
    return 0;
  } else {
    // Calculate the height of left and right subtrees
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    
    // Calculate the diameter of left and right subtrees recursively
    const leftDiameter = diameter(node.left);
    const rightDiameter = diameter(node.right);
    
    // Return the maximum of left height + right height + 1 (diameter passing through root)
    // and maximum of left diameter and right diameter (diameter not passing through root)
    return Math.max(leftHeight + rightHeight + 1, Math.max(leftDiameter, rightDiameter));
  }
}

// Create a binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// Calculate the diameter of the binary tree
const treeDiameter = diameter(root);

console.log("The diameter of the binary tree is:", treeDiameter);
