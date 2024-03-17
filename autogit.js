class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function depthLimitedSearch(root, target, depth) {
  if (root === null || depth === 0) {
    return null;
  }

  if (root.value === target) {
    return root;
  }

  const leftSearch = depthLimitedSearch(root.left, target, depth - 1);
  if (leftSearch !== null) {
    return leftSearch;
  }

  const rightSearch = depthLimitedSearch(root.right, target, depth - 1);
  if (rightSearch !== null) {
    return rightSearch;
  }

  return null;
}

// Example usage
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

const targetValue = 5;
const depthLimit = 2;

const result = depthLimitedSearch(root, targetValue, depthLimit);

if (result !== null) {
  console.log(`Found target ${targetValue} in the binary tree.`);
} else {
  console.log(`Target ${targetValue} not found within depth limit.`);
}
