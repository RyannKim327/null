class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function diameterOfBinaryTree(root) {
  let diameter = 0;

  function depth(node) {
    if (node === null) {
      return 0;
    }

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    diameter = Math.max(diameter, leftDepth + rightDepth);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);

  return diameter;
}

// Example Usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
