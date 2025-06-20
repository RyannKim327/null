type Node = string; // Define the type for nodes (e.g., strings)
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

/**
 * Depth-Limited Search Algorithm
 * @param graph - The graph represented as an adjacency list.
 * @param currentNode - The current node being explored.
 * @param goal - The target node to find.
 * @param depthLimit - The maximum depth to explore.
 * @param currentDepth - The current depth in the recursion.
 * @returns true if the goal is found within the depth limit, false otherwise.
 */
function depthLimitedSearch(
  graph: Graph,
  currentNode: Node,
  goal: Node,
  depthLimit: number,
  currentDepth: number = 0
): boolean {
  console.log(`Visiting node: ${currentNode} at depth ${currentDepth}`);

  // Base case 1: If the current node is the goal, return true
  if (currentNode === goal) {
    console.log(`Goal found at node: ${currentNode}`);
    return true;
  }

  // Base case 2: If the current depth exceeds the depth limit, stop searching
  if (currentDepth >= depthLimit) {
    console.log(`Depth limit reached at node: ${currentNode}`);
    return false;
  }

  // Recursive case: Explore all neighbors of the current node
  const neighbors = graph.get(currentNode) || [];
  for (const neighbor of neighbors) {
    if (depthLimitedSearch(graph, neighbor, goal, depthLimit, currentDepth + 1)) {
      return true; // Goal found in the subtree
    }
  }

  return false; // Goal not found in any subtree
}

// Example Usage
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

console.log("Starting Depth-Limited Search...");
const result = depthLimitedSearch(graph, startNode, goalNode, depthLimit);

if (result) {
  console.log(`Goal "${goalNode}" found within depth limit ${depthLimit}.`);
} else {
  console.log(`Goal "${goalNode}" not found within depth limit ${depthLimit}.`);
}
Starting Depth-Limited Search...
Visiting node: A at depth 0
Visiting node: B at depth 1
Visiting node: D at depth 2
Depth limit reached at node: D
Visiting node: E at depth 2
Depth limit reached at node: E
Visiting node: C at depth 1
Visiting node: F at depth 2
Goal found at node: F
Goal "F" found within depth limit 2.
