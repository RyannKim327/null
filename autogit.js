function Node(value, children) {
  this.value = value;
  this.children = children;
}

function depthLimitedSearch(root, target, depthLimit) {
  if (root.value === target) {
    return root;
  }

  const stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (depth < depthLimit) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        const child = node.children[i];
        if (child.value === target) {
          return child;
        }
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within the depth limit
}

// Example usage:
const tree = new Node(1, [
  new Node(2, [new Node(4, []), new Node(5, [])]),
  new Node(3, [new Node(6, []), new Node(7, [])]),
]);

const result = depthLimitedSearch(tree, 6, 5);
console.log(result); // Node { value: 6, children: [] }
