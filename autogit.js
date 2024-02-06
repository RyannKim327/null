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

    // Update the diameter if the current path through this node is longer
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the height of the subtree rooted at this node
    return 1 + Math.max(leftHeight, rightHeight);
  }

  getHeight(root);
  
  return diameter;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Diameter of the binary tree:", diameterOfBinaryTree(root));
