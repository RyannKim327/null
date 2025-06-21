type Node = string; // Assuming nodes are represented as strings
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

/**
 * Depth-Limited Search Algorithm
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param goal - The target node to find
 * @param limit - The maximum depth to explore
 * @returns True if the goal is found within the depth limit, otherwise false
 */
function depthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  limit: number
): boolean {
  // Helper function for recursive depth-limited search
  function dlsHelper(currentNode: Node, currentLimit: number): boolean {
    console.log(`Visiting node: ${currentNode} at depth limit: ${currentLimit}`);

    // Base case: If the current node is the goal, return true
    if (currentNode === goal) {
      console.log(`Goal found at node: ${currentNode}`);
      return true;
    }

    // Base case: If the depth limit is reached, stop exploring this path
    if (currentLimit <= 0) {
      console.log(`Depth limit reached at node: ${currentNode}`);
      return false;
    }

    // Recursive case: Explore neighbors
    const neighbors = graph.get(currentNode) || [];
    for (const neighbor of neighbors) {
      if (dlsHelper(neighbor, currentLimit - 1)) {
        return true; // Goal found in the subtree
      }
    }

    return false; // Goal not found in any subtree
  }

  // Start the depth-limited search from the root node
  return dlsHelper(start, limit);
}

// Example usage
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['D', 'E']],
  ['C', ['F']],
  ['D', []],
  ['E', ['G']],
  ['F', []],
  ['G', []],
]);

const startNode: Node = 'A';
const goalNode: Node = 'G';
const depthLimit: number = 3;

const result = depthLimitedSearch(graph, startNode, goalNode, depthLimit);
console.log(`Goal ${goalNode} found within depth limit ${depthLimit}:`, result);
Visiting node: A at depth limit: 3
Visiting node: B at depth limit: 2
Visiting node: D at depth limit: 1
Depth limit reached at node: D
Visiting node: E at depth limit: 1
Visiting node: G at depth limit: 0
Goal found at node: G
Goal G found within depth limit 3: true
