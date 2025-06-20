type Node = string | number; // Define the type for nodes (can be string or number)
type Graph = Map<Node, Node[]>; // Graph represented as an adjacency list

/**
 * Depth-Limited Search function
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param goal - The target node to find
 * @param limit - The maximum depth limit
 * @returns A boolean indicating whether the goal was found, and the path to the goal if found
 */
function depthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  limit: number
): { found: boolean; path: Node[] } {
  /**
   * Recursive helper function for DLS
   * @param node - Current node being explored
   * @param depth - Current depth in the search
   * @param path - Current path taken to reach this node
   * @returns A boolean indicating whether the goal was found, and the path to the goal if found
   */
  function dlsRecursive(
    node: Node,
    depth: number,
    path: Node[]
  ): { found: boolean; path: Node[] } {
    // Base case: If the current node is the goal, return success
    if (node === goal) {
      return { found: true, path: [...path, node] };
    }

    // Base case: If the depth limit is reached, stop exploring further
    if (depth === 0) {
      return { found: false, path: [] };
    }

    // Recursive case: Explore neighbors
    for (const neighbor of graph.get(node) || []) {
      const result = dlsRecursive(neighbor, depth - 1, [...path, node]);
      if (result.found) {
        return result; // Goal found, propagate the result up
      }
    }

    // If no path to the goal is found, return failure
    return { found: false, path: [] };
  }

  // Start the recursive search from the start node
  return dlsRecursive(start, limit, []);
}

// Example usage
const graph: Graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D", "E"]],
  ["C", ["F"]],
  ["D", []],
  ["E", ["F"]],
  ["F", []],
]);

const startNode: Node = "A";
const goalNode: Node = "F";
const depthLimit: number = 3;

const result = depthLimitedSearch(graph, startNode, goalNode, depthLimit);

if (result.found) {
  console.log(`Goal found! Path: ${result.path.join(" -> ")}`);
} else {
  console.log("Goal not found within the depth limit.");
}
