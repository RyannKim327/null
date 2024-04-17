class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(node, target, depthLimit, currentDepth = 0) {
  // Base case: If the current node contains the target value, return true
  if (node.value === target) {
    return true;
  }

  // Base case: If the depth limit is reached, return false
  if (currentDepth >= depthLimit) {
    return false;
  }

  // Recursively search the children of the current node
  for (let child of node.children) {
    if (depthLimitedSearch(child, target, depthLimit, currentDepth + 1)) {
      return true;
    }
  }

  return false;
}

// Example usage
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

nodeA.children = [nodeB, nodeC];
nodeB.children = [nodeD, nodeE];

const targetValue = 'E';
const depthLimit = 2;

const result = depthLimitedSearch(nodeA, targetValue, depthLimit);

console.log(`Target value found: ${result}`);
