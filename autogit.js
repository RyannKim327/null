class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findDiameter(root) {
  let diameter = 0;

  function calculateHeight(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = calculateHeight(node.left);
    const rightHeight = calculateHeight(node.right);

    diameter = Math.max(diameter, leftHeight + rightHeight);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  calculateHeight(root);

  return diameter;
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const diameter = findDiameter(root);
console.log("Diameter of the binary tree:", diameter);
