// Node class represents a state in the search space
class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}

// Perform depth-limited search
function depthLimitedSearch(node, target, depth) {
  // Base case: target found
  if (node.value === target) {
    return node.value;
  }

  // Base case: maximum depth reached
  if (depth === 0) {
    return null;
  }

  // Recursive case: traverse the children nodes
  for (const child of node.children) {
    const result = depthLimitedSearch(child, target, depth - 1);
    
    // Return the result if target found in the subtree
    if (result !== null) {
      return result;
    }
  }
  
  // Target not found within depth limit
  return null;
}

// Example usage
const tree = new Node('A', [
  new Node('B', [
    new Node('E', []),
    new Node('F', [])
  ]),
  new Node('C', [
    new Node('G', [])
  ]),
  new Node('D', [
    new Node('H', []),
    new Node('I', [])
  ])
]);

const targetValue = 'G';
const depthLimit = 2;

const result = depthLimitedSearch(tree, targetValue, depthLimit);

if (result !== null) {
  console.log(`Target '${targetValue}' found at depth ${depthLimit}`);
} else {
  console.log(`Target '${targetValue}' not found within depth ${depthLimit}`);
}
