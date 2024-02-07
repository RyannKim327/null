class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findMaxDepth(node) {
  if (node == null) {
    return 0;
  } else {
    let leftDepth = findMaxDepth(node.left);
    let rightDepth = findMaxDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }
}

// Example usage:
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(findMaxDepth(root)); // Output: 3
