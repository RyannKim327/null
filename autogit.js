class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  let stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    // Check if the current node matches the target
    if (node.value === target) {
      return node;
    }

    // Check if the depth limit has been reached
    if (depth >= depthLimit) {
      continue;
    }

    // Add children of the current node to the stack
    for (let child of node.children) {
      stack.push({ node: child, depth: depth + 1 });
    }
  }

  return null; // Target not found within depth limit
}

// Example usage:
// Create a tree:        A
//                     / \
//                    B   C
//                   / \   \
//                  D   E   F
//                 / \
//                G   H
let tree = new Node('A', [
  new Node('B', [
    new Node('D', [
      new Node('G'),
      new Node('H'),
    ]),
    new Node('E'),
  ]),
  new Node('C', [
    new Node('F'),
  ]),
]);

let targetNode = depthLimitedSearch(tree, 'D', 2);
console.log(targetNode);  // Node { value: 'D', children: [...] }
