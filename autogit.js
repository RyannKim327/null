class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(root, targetValue, depthLimit) {
  const stack = [{ node: root, depth: 0 }];

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

  return null; // Target value not found within depth limit
}

// Example usage
const tree = new Node(1, [
  new Node(2, [
    new Node(5),
    new Node(6),
  ]),
  new Node(3, [
    new Node(7),
    new Node(8),
  ]),
  new Node(4),
]);

const target = depthLimitedSearch(tree, 7, 3);
console.log(target); // Output: Node { value: 7, children: [] }, or null if not found within depth limit
