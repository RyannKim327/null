type Node<T> = {
  value: T;
  children: Node<T>[];
};

function depthLimitedSearch<T>(startNode: Node<T>, limit: number): Node<T> | null {
  const stack: Array<{ node: Node<T>; depth: number }> = [];
  stack.push({ node: startNode, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;

    // Check if we have reached the goal (or some condition, here just returning the node)
    // You may want to replace this with your goal condition
    if (depth === limit) {
      return node; // Return the node at the limit depth
    }

    // Check if we have not exceeded the depth limit
    if (depth < limit) {
      // Push children onto the stack with incremented depth
      for (const child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  // Return null if we did not find anything matching your 'goal'
  return null;
}

// Example usage:
const tree: Node<number> = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 4, children: [] },
        { value: 5, children: [] }
      ]
    },
    {
      value: 3,
      children: [
        { value: 6, children: [] },
        { value: 7, children: [] }
      ]
    }
  ]
};

const limit = 2;
const result = depthLimitedSearch(tree, limit);
console.log(result); // Output could vary based on the goal
