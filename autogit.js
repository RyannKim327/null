class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  const stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      for (const child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null;
}

// Example usage
const tree = new Node(1, [
  new Node(2, [
    new Node(4, []),
    new Node(5, []),
  ]),
  new Node(3, [
    new Node(6, []),
    new Node(7, []),
  ]),
]);

const targetValue = 5;
const depthLimit = 2;
const result = depthLimitedSearch(tree, targetValue, depthLimit);
console.log(result ? `Found node with value ${targetValue}` : `Node with value ${targetValue} not found within depth limit ${depthLimit}`);
