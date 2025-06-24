type Node = string; // Assuming nodes are represented as strings
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

/**
 * Depth-Limited Search Function
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
   * Recursive helper function
   * @param node - Current node being explored
   * @param depth - Current depth in the search
   * @returns A tuple [boolean, Node[]]
   */
  function dlsRecursive(node: Node, depth: number): [boolean, Node[]] {
    if (depth > limit) {
      // Depth limit exceeded
      return [false, []];
    }

    if (node === goal) {
      // Goal found
      return [true, [node]];
    }

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      const [found, path] = dlsRecursive(neighbor, depth + 1);
      if (found) {
        return [true, [node, ...path]]; // Prepend current node to the path
      }
    }

    // Goal not found in this subtree
    return [false, []];
  }

  // Start the recursive search
  const [found, path] = dlsRecursive(start, 0);
  return [found, path];
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

const [found, path] = depthLimitedSearch(graph, startNode, goalNode, depthLimit);

if (found) {
  console.log(`Goal found! Path: ${path.join(" -> ")}`);
} else {
  console.log("Goal not found within the depth limit.");
}
Goal found! Path: A -> B -> E -> G
Goal not found within the depth limit.
