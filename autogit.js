// Example tree structure
const tree = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        {
          value: 'D',
          children: [],
        },
        {
          value: 'E',
          children: [],
        },
      ],
    },
    {
      value: 'C',
      children: [
        {
          value: 'F',
          children: [],
        },
        {
          value: 'G',
          children: [],
        },
      ],
    },
  ],
};

// Depth-Limited Search algorithm
function depthLimitedSearch(node, target, depth) {
  // Base case: target value found or maximum depth reached
  if (node.value === target || depth === 0) {
    return null;
  }

  // Recursive case
  for (let i = 0; i < node.children.length; i++) {
    const result = depthLimitedSearch(node.children[i], target, depth - 1);
    if (result) {
      return result;
    }
  }

  return null;
}

// Example usage
const result = depthLimitedSearch(tree, 'F', 3);
console.log(result); // { value: 'F', children: [] }
