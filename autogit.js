class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (root === null) {
    return 0;
  } else if (root.left === null && root.right === null) {
    return 1;
  } else {
    return countLeafNodes(root.left) + countLeafNodes(root.right);
  }
}

// Example usage
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);

const leafCount = countLeafNodes(tree);
console.log(leafCount); // Output: 3
