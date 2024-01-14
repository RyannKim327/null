class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function depthLimitedSearch(root, target, maxDepth) {
  const stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
  
    if (node.value === target) {
      return node;
    }

    if (depth < maxDepth) {
      // Add children to the stack in reverse order
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within the depth limit
}

// Example usage
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);

const targetNode = depthLimitedSearch(root, 5, 2);
console.log(targetNode); // Output: Node { value: 5, children: [] }
