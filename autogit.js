class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(root) {
  let maxDiameter = 0;

  function longestPath(node) {
    if (node === null) return 0;

    const leftPath = longestPath(node.left);
    const rightPath = longestPath(node.right);

    maxDiameter = Math.max(maxDiameter, leftPath + rightPath);

    return Math.max(leftPath, rightPath) + 1;
  }

  longestPath(root);

  return maxDiameter;
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(binaryTreeDiameter(root)); // Output: 4
