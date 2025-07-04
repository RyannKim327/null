interface Node {
  // Define your node structure
  id: string; // or number, or any unique identifier
  children?: Node[]; // assuming a tree or graph structure
}

// A helper function to generate all neighbors or children of a node
function getNeighbors(node: Node): Node[] {
  return node.children || [];
}

/**
 * Iterative Depth-Limited Search
 * @param start - the starting node
 * @param goal - function to determine if a node is goal
 * @param limit - maximum depth to search
 * @returns the node if found, otherwise null
 */
function depthLimitedSearch(
  start: Node,
  goal: (node: Node) => boolean,
  limit: number
): Node | null {
  type StackItem = { node: Node; depth: number };

  // Initialize stack with start node at depth 0
  const stack: StackItem[] = [{ node: start, depth: 0 }];
  // Keep track of visited nodes to prevent revisiting
  const visited = new Set<string>();

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;

    if (visited.has(node.id)) {
      continue;
    }
    visited.add(node.id);

    // Check if current node matches goal
    if (goal(node)) {
      return node;
    }

    // If within depth limit, expand children
    if (depth < limit) {
      const neighbors = getNeighbors(node);
      // Push children onto the stack with incremented depth
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor.id)) {
          stack.push({ node: neighbor, depth: depth + 1 });
        }
      }
    }
  }

  // Not found within depth limit
  return null;
}
const nodeA: Node = {
  id: "A",
  children: [
    { id: "B" },
    {
      id: "C",
      children: [
        { id: "D" },
        { id: "E" }
      ]
    }
  ]
};

const foundNode = depthLimitedSearch(
  nodeA,
  (node) => node.id === "E",
  3
);

console.log(foundNode); // Should log the node with id "E" if within depth limit
