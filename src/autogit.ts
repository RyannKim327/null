type Node = string | number; // Define the type for nodes (can be strings or numbers)
type Graph = Map<Node, Node[]>; // A graph represented as an adjacency list

/**
 * Depth-Limited Search function
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param goal - The goal node to search for
 * @param limit - The maximum depth limit
 * @returns A tuple [boolean, Node[]] indicating success/failure and the path
 */
function depthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  limit: number
): [boolean, Node[]] {
  /**
   * Recursive helper function for DLS
   * @param node - Current node being explored
   * @param depth - Current depth in the search
   * @param path - Path taken to reach the current node
   * @returns A tuple [boolean, Node[]] indicating success/failure and the path
   */
  function dlsRecursive(node: Node, depth: number, path: Node[]): [boolean, Node[]] {
    // If the current node is the goal, return success and the path
    if (node === goal) {
      return [true, path];
    }

    // If the depth limit is reached, stop exploring further
    if (depth === 0) {
      return [false, path];
    }

    // Explore all neighbors of the current node
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      const [found, resultPath] = dlsRecursive(neighbor, depth - 1, [...path, neighbor]);
      if (found) {
        return [true, resultPath]; // Goal found, return the path
      }
    }

    // Goal not found in this branch
    return [false, path];
  }

  // Start the recursive search from the start node
  return dlsRecursive(start, limit, [start]);
}

// Example usage
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['D', 'E']],
  ['C', ['F']],
  ['D', []],
  ['E', []],
  ['F', []],
]);

const startNode: Node = 'A';
const goalNode: Node = 'F';
const depthLimit: number = 2;

const [found, path] = depthLimitedSearch(graph, startNode, goalNode, depthLimit);

if (found) {
  console.log(`Goal found! Path: ${path.join(' -> ')}`);
} else {
  console.log('Goal not found within the depth limit.');
}
Goal found! Path: A -> C -> F
Goal not found within the depth limit.
