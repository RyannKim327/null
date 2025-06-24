// Define the structure of a node
interface Node {
  id: string; // Unique identifier for the node
  children: Node[]; // List of child nodes
}

/**
 * Depth-Limited Search (Iterative)
 * @param startNode - The starting node for the search
 * @param goalId - The ID of the goal node
 * @param depthLimit - The maximum depth to explore
 * @returns The goal node if found, otherwise null
 */
function depthLimitedSearch(
  startNode: Node,
  goalId: string,
  depthLimit: number
): Node | null {
  // Define a stack to store nodes and their current depth
  const stack: { node: Node; depth: number }[] = [{ node: startNode, depth: 0 }];

  while (stack.length > 0) {
    // Pop the top element from the stack
    const { node, depth } = stack.pop()!;

    // Check if the current node is the goal
    if (node.id === goalId) {
      return node;
    }

    // If the depth limit has not been reached, explore the children
    if (depth < depthLimit) {
      // Push all children onto the stack with incremented depth
      for (const child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  // If the stack is empty and no goal was found, return null
  return null;
}

// Example usage
const tree: Node = {
  id: "A",
  children: [
    {
      id: "B",
      children: [
        { id: "D", children: [] },
        { id: "E", children: [] },
      ],
    },
    {
      id: "C",
      children: [
        { id: "F", children: [] },
        { id: "G", children: [] },
      ],
    },
  ],
};

const goalId = "G";
const depthLimit = 2;

const result = depthLimitedSearch(tree, goalId, depthLimit);

if (result) {
  console.log(`Goal node found: ${result.id}`);
} else {
  console.log("Goal node not found within the depth limit.");
}
