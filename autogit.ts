interface Node<T> {
  value: T;
  children: Node<T>[];
}

function depthLimitedSearch<T>(
  node: Node<T>, 
  target: T, 
  limit: number
): Node<T> | null {

  function recursiveDLS(current: Node<T>, depth: number): Node<T> | null {
    if(depth > limit) return null; // Limit reached, stop exploring deeper

    if(current.value === target) return current; // Found target

    for(let child of current.children) {
      const result = recursiveDLS(child, depth + 1);
      if(result !== null) return result;
    }
    return null; // Target not found at this branch
  }

  return recursiveDLS(node, 0);
}

// Example usage:
const tree: Node<number> = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [
      { value: 4, children: [] },
      { value: 5, children: [] }
    ]}
  ]
};

const foundNode = depthLimitedSearch(tree, 5, 2);
console.log(foundNode); // Prints node with value 5 or null if not found within depth 2
