class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumOfNodes(node) {
  if (node === null) {
    return 0;
  }
  
  const leftSum = sumOfNodes(node.left);
  const rightSum = sumOfNodes(node.right);
  
  return node.value + leftSum + rightSum;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const sum = sumOfNodes(root);
console.log("Sum of all nodes:", sum);
