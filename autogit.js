class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(node, target, depthLimit) {
  if (node.value === target) {
    return node;
  }
  
  if (depthLimit === 0) {
    return null;
  }
  
  for (let child of node.children) {
    const result = depthLimitedSearch(child, target, depthLimit - 1);
    if (result !== null) {
      return result;
    }
  }
  
  return null;
}

// Example usage
const tree = new Node('A', [
  new Node('B', [
    new Node('C', [
      new Node('G'),
      new Node('H')
    ]),
    new Node('D', [
      new Node('I'),
      new Node('J')
    ]),
  ]),
  new Node('E', [
    new Node('F', [
      new Node('K'),
      new Node('L')
    ]),
  ]),
]);

const targetNode = depthLimitedSearch(tree, 'K', 2);
console.log(targetNode);
