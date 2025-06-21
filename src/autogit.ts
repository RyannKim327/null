type Node = string; // You can change this type based on your use case (e.g., number, object, etc.)
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

/**
 * Performs Depth-Limited Search (DLS) on a graph.
 * @param graph - The graph represented as an adjacency list.
 * @param start - The starting node.
 * @param goal - The goal node to find.
 * @param depthLimit - The maximum depth to explore.
 * @returns True if the goal is found within the depth limit, otherwise false.
 */
function depthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  depthLimit: number
): boolean {
  /**
   * Recursive helper function for DLS.
   * @param current - The current node being explored.
   * @param currentDepth - The current depth in the search.
   * @returns True if the goal is found, otherwise false.
   */
  function dlsHelper(current: Node, currentDepth: number): boolean {
    console.log(`Visiting node: ${current} at depth: ${currentDepth}`);

    // Base case: If the current node is the goal, return true
    if (current === goal) {
      return true;
    }

    // Base case: If the depth limit is reached, return false
    if (currentDepth >= depthLimit) {
      return false;
    }

    // Recursive case: Explore neighbors
    const neighbors = graph.get(current) || [];
    for (const neighbor of neighbors) {
      if (dlsHelper(neighbor, currentDepth + 1)) {
        return true; // Goal found in the subtree
      }
    }

    return false; // Goal not found in any subtree
  }

  // Start the search from the start node at depth 0
  return dlsHelper(start, 0);
}

// Example Usage
const graph: Graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D", "E"]],
  ["C", ["F"]],
  ["D", []],
  ["E", ["G"]],
  ["F", []],
  ["G", []],
]);

const startNode: Node = "A";
const goalNode: Node = "G";
const depthLimit: number = 3;

const result = depthLimitedSearch(graph, startNode, goalNode, depthLimit);
console.log(`Goal "${goalNode}" found within depth limit ${depthLimit}:`, result);
        A
       / \
      B   C
     / \   \
    D   E   F
         \
          G
Goal "G" found within depth limit 3: true
