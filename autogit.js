class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;
  
  function getHeight(node) {
    if (node === null) {
      return 0;
    }
    
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    
    // Update the diameter if the current path has maximum nodes
    diameter = Math.max(diameter, leftHeight + rightHeight);
    
    // Return the height of the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }
  
  getHeight(root);
  return diameter;
}

// Example usage:

// Initialize the binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.left.left.left = new Node(8);
root.right.right.right = new Node(9);

// Find the diameter of the binary tree
const diameter = diameterOfBinaryTree(root);
console.log(diameter); // Output: 6
