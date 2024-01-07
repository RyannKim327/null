// Node class to represent a tree node
class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

// Iterative depth-limited search algorithm
function depthLimitedSearch(root, target, maxDepth) {
  let stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < maxDepth) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null;
}

// Example usage
let tree = new Node(1, [
  new Node(2, [
    new Node(4),
    new Node(5),
  ]),
  new Node(3, [
    new Node(6),
    new Node(7),
  ]),
]);

let result = depthLimitedSearch(tree, 6, 2);
if (result) {
  console.log("Node found:", result);
} else {
  console.log("Node not found.");
}
