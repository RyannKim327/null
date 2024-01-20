class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(node, target, depth) {
  if (node.value === target) {
    return node;
  }

  if (depth === 0) {
    return null;
  }

  for (let child of node.children) {
    const result = depthLimitedSearch(child, target, depth - 1);
    if (result) {
      return result;
    }
  }

  return null;
}

// Example usage:
const G = new Node("G");
const F = new Node("F");
const E = new Node("E", [G]);
const D = new Node("D", [F]);
const C = new Node("C", [E]);
const B = new Node("B", [D]);
const A = new Node("A", [B, C]);

const result = depthLimitedSearch(A, "G", 3);
console.log(result);
