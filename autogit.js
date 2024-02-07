class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  // Create an empty stack and push the root node
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    // Pop the top node from the stack
    const { node, depth } = stack.pop();

    // Check if the current node's value matches the target
    if (node.value === target) {
      return node;
    }

    // Check if the depth limit is reached
    if (depth < depthLimit) {
      // Push the children of the current node onto the stack
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  // Return null if target is not found within the depth limit
  return null;
}

// Example usage
const tree = new Node(1, [
  new Node(2, [new Node(4), new Node(5)]),
  new Node(3, [new Node(6), new Node(7)])
]);

const targetNode = depthLimitedSearch(tree, 5, 3);
console.log(targetNode); // Outputs: Node { value: 5, children: [] }
