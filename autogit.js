function Node(value, children) {
  this.value = value; // the value of the node
  this.children = children || []; // an array of child nodes
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
      let childNodes = node.children;
      for (let i = childNodes.length - 1; i >= 0; i--) {
        stack.push({ node: childNodes[i], depth: depth + 1 });
      }
    }
  }

  return null; // not found
}

// Example usage:
// Create a tree with values from 1 to 9
let root = new Node(1, [
  new Node(2, [
    new Node(4, [new Node(7)]),
    new Node(5),
  ]),
  new Node(3, [
    new Node(6, [new Node(8), new Node(9)]),
  ]),
]);

let targetNode = depthLimitedSearch(root, 8, 3);
console.log(targetNode); // Output: Node { value: 8, children: [] }
