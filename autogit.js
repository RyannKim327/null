class Node {
  constructor(value, children = []) {
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
      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within depth limit
}

// Example Usage
const root = new Node(1, [
  new Node(2, [new Node(4), new Node(5)]),
  new Node(3, [new Node(6), new Node(7)]),
]);

const targetNode = depthLimitedSearch(root, 4, 2);
console.log(targetNode ? targetNode.value : 'Target not found');
