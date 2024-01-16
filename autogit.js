class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.data === target) {
      return node;
    }

    if (depth < depthLimit) {
      // Add children to the stack in reverse order to explore them in the correct order
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within the depth limit
}

// Usage example

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

root.addChild(node2);
root.addChild(node3);

node2.addChild(node4);
node3.addChild(node5);
node3.addChild(node6);

const targetNode = depthLimitedSearch(root, 6, 2);
console.log(targetNode); // Output: Node { data: 6, children: [] }
