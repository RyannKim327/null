class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findSumOfNodes(root) {
  if (root === null) {
    return 0;
  }

  // Use depth-first search to traverse the tree
  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const node = stack.pop();
    sum += node.value;

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return sum;
}

// Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const sum = findSumOfNodes(root);
console.log('Sum of all nodes:', sum); // Output: Sum of all nodes: 15
