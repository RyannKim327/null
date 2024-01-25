class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

function sumOfNodes(root) {
  if (root === null) {
    return 0; // Base case: empty tree has a sum of zero.
  } else {
    // Recursively calculate the sum of nodes in the left and right subtrees
    // and add it to the value of the current root node.
    return (
      root.data +
      sumOfNodes(root.left) +
      sumOfNodes(root.right)
    );
  }
}

// Example usage:
//     1
//    / \
//   2   3
//  / \
// 4   5
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const sum = sumOfNodes(root);
console.log('Sum of all nodes:', sum); // Output: 15
