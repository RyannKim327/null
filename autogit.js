function Node(value, children) {
  this.value = value;
  this.children = children;
}

function depthLimitedSearch(root, targetValue, depthLimit) {
  let stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === targetValue) {
      return node; // return the node if its value matches the target value
    }

    if (depth < depthLimit) {
      // Add the node's children to the stack if depth limit is not reached
      const children = node.children;
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push({ node: children[i], depth: depth + 1 });
      }
    }
  }

  return null; // return null if the target value is not found within the depth limit
}

// Example usage
const node1 = new Node(1, []);
const node4 = new Node(4, []);
const node6 = new Node(6, []);
const node3 = new Node(3, [node6]);
const node5 = new Node(5, []);
const node2 = new Node(2, [node4, node5]);
const root = new Node(0, [node1, node2, node3]);

const targetNode = depthLimitedSearch(root, 6, 3);
console.log(targetNode); // Output: Node { value: 6, children: [] }
