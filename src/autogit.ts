type Node<T> = {
  value: T;
  children?: Node<T>[];
};

function depthLimitedSearch<T>(
  node: Node<T>,
  goalTest: (value: T) => boolean,
  limit: number
): boolean {
  // Base case: check if the current node is the goal
  if (goalTest(node.value)) {
    return true;
  }

  // If limit is zero, do not explore further
  if (limit <= 0) {
    return false;
  }

  // Recurse over children if any
  if (node.children) {
    for (const child of node.children) {
      // recurse with limit - 1
      if (depthLimitedSearch(child, goalTest, limit - 1)) {
        return true;
      }
    }
  }
  // not found at this branch
  return false;
}
const tree: Node<number> = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 4 }, { value: 5 }] },
    { value: 3, children: [{ value: 6 }, { value: 7 }] }
  ],
};

const goal = 5;
const limit = 2;

const found = depthLimitedSearch(
  tree,
  (value) => value === goal,
  limit
);

console.log(`Goal ${goal} found within depth limit ${limit}: ${found}`);
