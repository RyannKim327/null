class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findDiameter(root) {
  let diameter = 0;

  function computeHeight(node) {
    if (node === null) return 0;

    const leftHeight = computeHeight(node.left);
    const rightHeight = computeHeight(node.right);

    diameter = Math.max(diameter, leftHeight + rightHeight + 1);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  computeHeight(root);

  return diameter;
}

// Usage example:
const tree = new Node(1,
  new Node(2,
    new Node(4),
    new Node(5)),
  new Node(3));
const diameter = findDiameter(tree);
console.log(`Diameter of the binary tree is: ${diameter}`);
