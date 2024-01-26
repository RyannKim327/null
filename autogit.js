class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  const stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      // Add children to the stack in reverse order for depth-first search
      for (let i = node.children.length - 1; i >= 0; i--) {
        const child = node.children[i];
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within depth limit
}

// Usage example:
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const grandchild1 = new Node(4);
const grandchild2 = new Node(5);

child1.addChild(grandchild1);
child2.addChild(grandchild2);
root.addChild(child1);
root.addChild(child2);

const targetNode = depthLimitedSearch(root, 5, 2);
console.log(targetNode ? `Found target node with value ${targetNode.value}` : "Target node not found within depth limit");
