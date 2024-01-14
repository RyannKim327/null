function depthLimitedSearch(node, goal, depthLimit) {
  if (node === goal) {
    // Goal reached, return the node
    return node;
  }
  
  // Check depth limit
  if (depthLimit === 0) {
    // Depth limit reached, return null to indicate failure
    return null;
  }
  
  // Recursive search for each child node
  for (let i = 0; i < node.children.length; i++) {
    const result = depthLimitedSearch(node.children[i], goal, depthLimit - 1);
    
    if (result) {
      // If a non-null result is found, return it
      return result;
    }
  }
  
  // No solution found at this depth
  return null;
}

// Example usage:
let tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
          children: []
        }
      ]
    },
    {
      value: 4,
      children: [
        {
          value: 5,
          children: []
        },
        {
          value: 6,
          children: []
        }
      ]
    }
  ]
};

let result = depthLimitedSearch(tree, 5, 3);
console.log(result);
