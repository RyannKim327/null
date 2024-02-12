class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearchIterative(root, targetValue, depthLimit) {
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    // Check if the current node matches the target value
    if (node.value === targetValue) {
      return node;
    }

    // If the current depth hasn't reached the limit, add children to the stack
    if (depth < depthLimit) {
      for (const child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  // Return null if targetValue is not found within the depth limit
  return null;
}

// Usage example:
// Create a tree with numeric values
const root = new Node(1, [
  new Node(2, [
    new Node(4),
    new Node(5),
  ]),
  new Node(3, [
    new Node(6),
    new Node(7),
  ]),
]);

// Perform depth-limited search with a depth limit of 2
const result = depthLimitedSearchIterative(root, 7, 2);

console.log(result); // Node { value: 7 }
