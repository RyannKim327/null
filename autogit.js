class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(node) {
  if (node === null) {
    return 0;
  }

  let leftDepth = maxDepth(node.left);
  let rightDepth = maxDepth(node.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

// Example binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Maximum depth of the binary tree is: ", maxDepth(root));
