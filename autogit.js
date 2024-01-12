class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function calculateHeight(node) {
    if (node == null) {
      return 0;
    }

    const leftHeight = calculateHeight(node.left);
    const rightHeight = calculateHeight(node.right);

    // update diameter if the current path has a greater length
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // return the height of the current node
    return Math.max(leftHeight, rightHeight) + 1;
  }

  calculateHeight(root);
  return diameter;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameterOfBinaryTree(root));  // Output: 3
