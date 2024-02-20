class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  
  addChild(node) {
    this.children.push(node);
  }
}

function depthLimitedSearch(root, target, depthLimit) {
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

// Example usage:
let root = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);

root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);

let targetNode = depthLimitedSearch(root, 5, 2);
console.log(targetNode); // Output: TreeNode { value: 5, children: [] }
