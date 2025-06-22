type Graph = Map<number, number[]>;
function depthLimitedSearch(
  graph: Graph,
  startNode: number,
  goalNode: number,
  limit: number
): boolean {
  // Helper function for recursive DLS
  function dlsRecursive(node: number, depth: number): boolean {
    // Base case: If the depth exceeds the limit, stop searching
    if (depth > limit) {
      return false;
    }

    console.log(`Visiting node ${node} at depth ${depth}`);

    // Check if the current node is the goal node
    if (node === goalNode) {
      console.log(`Goal node ${goalNode} found at depth ${depth}`);
      return true;
    }

    // Explore all neighbors of the current node
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (dlsRecursive(neighbor, depth + 1)) {
        return true; // Goal found in the subtree
      }
    }

    return false; // Goal not found in this subtree
  }

  // Start the recursive search from the start node at depth 0
  return dlsRecursive(startNode, 0);
}
// Create a sample graph
const graph: Graph = new Map([
  [1, [2, 3]],
  [2, [4, 5]],
  [3, [6]],
  [4, []],
  [5, []],
  [6, []],
]);

// Test the depth-limited search
const startNode = 1;
const goalNode = 6;
const limit = 2;

console.log("Starting depth-limited search...");
const result = depthLimitedSearch(graph, startNode, goalNode, limit);

if (result) {
  console.log(`Goal node ${goalNode} found within the depth limit.`);
} else {
  console.log(`Goal node ${goalNode} not found within the depth limit.`);
}
Starting depth-limited search...
Visiting node 1 at depth 0
Visiting node 2 at depth 1
Visiting node 4 at depth 2
Visiting node 5 at depth 2
Visiting node 3 at depth 1
Visiting node 6 at depth 2
Goal node 6 found at depth 2
Goal node 6 found within the depth limit.
Starting depth-limited search...
Visiting node 1 at depth 0
Visiting node 2 at depth 1
Visiting node 3 at depth 1
Goal node 6 not found within the depth limit.
