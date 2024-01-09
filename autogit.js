class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateSum(node) {
  if (node === null) {
    return 0;
  }

  return (
    node.value + calculateSum(node.left) + calculateSum(node.right)
  );
}

// Example tree
//           1
//          / \
//         2   3
//        /
//       4

// Create nodes
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

// Connect nodes
root.left = node2;
root.right = node3;
node2.left = node4;

// Calculate the sum
let sum = calculateSum(root);
console.log("Sum of all nodes:", sum);
