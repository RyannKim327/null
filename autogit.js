class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(root, targetValue, depthLimit) {
  let stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node.value === targetValue) {
      return node;
    }
    
    if (depth < depthLimit) {
      node.children.reverse().forEach(child => {
        stack.push({ node: child, depth: depth + 1 });
      });
    }
  }

  return null;
}

// Example usage
let tree = new Node(1, [
  new Node(2, [
    new Node(4, [
      new Node(8)
    ]),
    new Node(5, [
      new Node(9),
      new Node(10)
    ])
  ]),
  new Node(3, [
    new Node(6),
    new Node(7)
  ])
]);

let result = depthLimitedSearch(tree, 9, 3);
console.log(result); // Prints: Node { value: 9 }
