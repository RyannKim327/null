function Node(value, children) {
  this.value = value;
  this.children = children;
}

function depthLimitedSearch(root, targetValue, depthLimit) {
  // Create an empty stack and push the root node onto it
  const stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    // Pop the top node from the stack
    const { node, depth } = stack.pop();

    // Check if the current node matches the target value
    if (node.value === targetValue) {
      return node;
    }

    // Check if the depth limit has been reached
    if (depth === depthLimit) {
      continue;
    }

    // Push the children of the current node onto the stack
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  // Target value not found within depth limit
  return null;
}

// Example usage
const tree = new Node(1, [
  new Node(2, [new Node(4), new Node(5)]),
  new Node(3, [new Node(6), new Node(7)])
]);

const result = depthLimitedSearch(tree, 6, 2);
console.log(result); // Node { value: 6, children: [] }
