type Node<T> = {
  value: T;
  children: Node<T>[];
};

// Depth-limited search function:
// - node: current node to explore
// - goal: value to find (or a function to decide goal)
// - limit: maximum depth to explore
// - currentDepth: internal parameter to track depth (default 0)
function depthLimitedSearch<T>(
  node: Node<T>,
  goal: T | ((value: T) => boolean),
  limit: number,
  currentDepth = 0
): Node<T> | null {
  // Check if current node meets the goal condition
  const isGoal = typeof goal === 'function' ? goal(node.value) : node.value === goal;
  if (isGoal) return node;

  if (currentDepth >= limit) {
    return null; // reached depth limit, stop exploring this path
  }

  for (const child of node.children) {
    const result = depthLimitedSearch(child, goal, limit, currentDepth + 1);
    if (result !== null) {
      return result; // early return on finding the goal
    }
  }

  return null; // goal not found in this branch
}
       A
      / \
     B   C
    /   / \
   D   E   F
const tree: Node<string> = {
  value: 'A',
  children: [
    { value: 'B', children: [{ value: 'D', children: [] }] },
    { value: 'C', children: [{ value: 'E', children: [] }, { value: 'F', children: [] }] }
  ]
};

// Search for node with value 'E' with a depth limit of 2
const found = depthLimitedSearch(tree, 'E', 2);

console.log(found?.value); // Output: 'E'

// Search for 'E' with a depth limit of 1 (should fail)
const notFound = depthLimitedSearch(tree, 'E', 1);
console.log(notFound); // null
