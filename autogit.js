class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  let stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      for (let child of node.children.reverse()) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null;
}

// Example usage
let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');

a.addChild(b);
a.addChild(c);
b.addChild(d);
b.addChild(e);

console.log(depthLimitedSearch(a, 'D', 2)); // Output: Node { value: 'D', children: [] }
console.log(depthLimitedSearch(a, 'E', 1)); // Output: null
