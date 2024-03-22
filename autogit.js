class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  if (!root) return null;

  let stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null;
}

// Example usage
const node1 = new Node(1, []);
const node2 = new Node(2, []);
const node3 = new Node(3, []);
const node4 = new Node(4, []);
const node5 = new Node(5, []);

node1.children = [node2, node3];
node2.children = [node4, node5];

const result = depthLimitedSearch(node1, 5, 2);
console.log(result ? result.value : "Node not found");
