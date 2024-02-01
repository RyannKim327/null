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
      return true; // Found the target
    }
    
    if (depth < depthLimit) {
      // Add child nodes to the stack
      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }
  
  return false; // Target not found within the depth limit
}

// Usage example:
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const grandchild1 = new Node(4);
const grandchild2 = new Node(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child2.addChild(grandchild2);

console.log(depthLimitedSearch(root, 5, 3)); // Output: true
