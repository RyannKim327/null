class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

// Iterative depth-limited search algorithm
function depthLimitedSearchIterative(root, targetValue, depthLimit) {
  const stack = []; // Stack to keep track of nodes
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop(); // Get the last node in the stack

    if (node.value === targetValue) {
      return node; // If the target value is found, return the node
    }

    if (depth < depthLimit) {
      // Add children of current node to the stack, incrementing their depth
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // If target value is not found within depth limit, return null
}

// Usage example
const tree = new Node(1, [
  new Node(2, [new Node(4), new Node(5)]),
  new Node(3, [new Node(6), new Node(7)]),
]);

console.log(depthLimitedSearchIterative(tree, 7, 3)); // Output: Node { value: 7, children: [] }
