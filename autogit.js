class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(root) {
  if (root === null) {
    return 0; // Empty tree has no leaf nodes
  } else if (root.left === null && root.right === null) {
    return 1; // A single node tree is a leaf node
  } else {
    // Recursively count leaf nodes in the left and right subtrees
    return countLeafNodes(root.left) + countLeafNodes(root.right);
  }
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

console.log(countLeafNodes(root)); // Output: 3 (nodes 4, 5, and 6 are leaf nodes)
