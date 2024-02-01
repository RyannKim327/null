function Node(value, children) {
  this.value = value;
  this.children = children || [];
}

function depthLimitedSearch(root, targetValue, depthLimit) {
  const stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === targetValue) {
      return node;
    }

    if (depth < depthLimit) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Target value not found within the depth limit
}

// Example usage
const tree = new Node(1, [
  new Node(2, [new Node(4), new Node(5)]),
  new Node(3, [new Node(6), new Node(7)])
]);

const result = depthLimitedSearch(tree, 7, 2);
console.log(result); // Output: Node { value: 7, children: [] }
