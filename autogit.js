class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children || [];
  }
}

function depthLimitedSearch(root, target, limit) {
  let stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < limit) {
      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null;
}

// Usage example:
let rootNode = new Node(1, [
  new Node(2, [
    new Node(4),
    new Node(5),
    new Node(6)
  ]),
  new Node(3, [
    new Node(7),
    new Node(8)
  ])
]);

let targetNode = depthLimitedSearch(rootNode, 5, 2);
console.log(targetNode); // Node { value: 5, children: [] }
