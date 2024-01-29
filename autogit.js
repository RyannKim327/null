class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function countLeafNodes(node) {
  // Base case: if node is null, return 0
  if (node === null) {
    return 0;
  }

  // Base case: if node is a leaf, return 1
  if (node.left === null && node.right === null) {
    return 1;
  }

  // Recursive case: return the sum of leaf nodes in left and right subtrees
  return countLeafNodes(node.left) + countLeafNodes(node.right);
}

// Example usage:
//     1
//    / \
//   2   3
//  / \ /
// 4  5 6
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);

console.log(countLeafNodes(root)); // Output: 3
