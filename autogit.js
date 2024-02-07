function Node(value, children) {
  this.value = value;
  this.children = children;
}

function depthLimitedSearch(root, target, depthLimit) {
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      // Add child nodes to the stack
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within depth limit
}

// Example usage
const node6 = new Node(6, []);
const node5 = new Node(5, []);
const node4 = new Node(4, []);
const node3 = new Node(3, [node6]);
const node2 = new Node(2, [node4, node5]);
const node1 = new Node(1, [node2, node3]);
const rootNode = new Node(0, [node1]);

const targetNode = depthLimitedSearch(rootNode, 6, 2);
console.log(targetNode); // Output: Node { value: 6, children: [] }
