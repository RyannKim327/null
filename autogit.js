class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearchIterative(root, target, maxDepth) {
  let stack = [{ node: root, depth: 0 }];
  
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    
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
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');

nodeA.children = [nodeB, nodeC];
nodeC.children = [nodeD];

const result = depthLimitedSearchIterative(nodeA, 'D', 2);
console.log(result); // Node { value: 'D', children: [] }
