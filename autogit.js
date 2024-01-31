class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function height(node) {
    if (node === null) {
      return 0;
    }
    
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    
    // Update the diameter if the current node's diameter is larger
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // Return the height of the current node
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  return diameter;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
