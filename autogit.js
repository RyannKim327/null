class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function calculateSum(root) {
  if (root === null) {
    return 0;
  }

  let sum = root.value;
  sum += calculateSum(root.left);
  sum += calculateSum(root.right);

  return sum;
}

// Example usage:
const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

const sum = calculateSum(tree);
console.log('Sum of all nodes:', sum);
