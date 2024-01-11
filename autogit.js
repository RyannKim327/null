class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  let stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    // Check if reached the depth limit
    if (depth < depthLimit) {
      // Add children in reverse order to visit them in the correct order
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within depth limit
}

// Usage example
const root = new Node(1, [
  new Node(2, [new Node(4), new Node(5)]),
  new Node(3, [new Node(6), new Node(7)]),
]);

const targetNode = depthLimitedSearch(root, 5, 2);
console.log(targetNode ? targetNode.value : "Target not found");
