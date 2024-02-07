function depthLimitedSearchIterative(root, target, depthLimit) {
  let stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node === target) {
      return node; // Target found
    }

    if (depth < depthLimit) {
      // Expand the node if depth limit allows
      let children = expandNode(node);
      for (let child of children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within depth limit
}

function expandNode(node) {
  // Implement your node expansion logic here
  // This function should return an array of child nodes
  // that can be reached from the given node.
  
  // Example:
  // If your nodes have 'children' property,
  // you can use: return node.children;
}

// Usage example:
let rootNode = { /* your tree or graph structure here */ };
let targetNode = { /* target node */ };
let depthLimit = 5;

let result = depthLimitedSearchIterative(rootNode, targetNode, depthLimit);
console.log(result); // Prints the target node if found, null otherwise
