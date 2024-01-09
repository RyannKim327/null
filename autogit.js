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
  }

  if (root.left === null && root.right === null) {
    return 1; // Found a leaf node
  }

  let leftCount = countLeafNodes(root.left);
  let rightCount = countLeafNodes(root.right);

  return leftCount + rightCount;
}

// Example usage
// Create a binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

let leafCount = countLeafNodes(root);
console.log(leafCount); // Output: 4
