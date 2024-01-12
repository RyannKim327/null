class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearchIterative(root, target, depthLimit) {
  let stack = [];
  
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      // Push children nodes onto stack in reverse order
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  // Target not found within depth limit
  return null;
}

// Usage example
let tree = new Node(1, [
  new Node(2, [new Node(4, []), new Node(5, [])]),
  new Node(3, [new Node(6, []), new Node(7, [])])
]);

let result = depthLimitedSearchIterative(tree, 6, 2);
console.log(result ? `Target found: ${result.value}` : "Target not found");
