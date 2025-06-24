type Node = string; // Assuming nodes are represented as strings
type Graph = Map<Node, Node[]>; // Adjacency list representation

/**
 * Breadth-Limited Search Algorithm
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param goal - The target node to find
 * @param limit - The maximum depth to explore
 * @returns The path to the goal node if found, or null if not found within the depth limit
 */
function breadthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  limit: number
): Node[] | null {
  const queue: { node: Node; depth: number }[] = [{ node: start, depth: 0 }];
  const visited = new Set<Node>();

  while (queue.length > 0) {
    const { node, depth } = queue.shift()!;

    // Skip if the node has already been visited
    if (visited.has(node)) continue;
    visited.add(node);

    // If the goal is found, return the path (for simplicity, just return the goal here)
    if (node === goal) {
      return [node]; // Path reconstruction can be added if needed
    }

    // Stop exploring if the depth limit is reached
    if (depth >= limit) continue;

    // Add neighbors to the queue with incremented depth
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push({ node: neighbor, depth: depth + 1 });
      }
    }
  }

  // Goal not found within the depth limit
  return null;
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

const startNode = "A";
const goalNode = "G";
const depthLimit = 3;

const result = breadthLimitedSearch(graph, startNode, goalNode, depthLimit);
if (result) {
  console.log(`Goal "${goalNode}" found within depth limit:`, result);
} else {
  console.log(`Goal "${goalNode}" not found within depth limit.`);
}
Goal "G" found within depth limit: [ 'G' ]
Goal "G" not found within depth limit.
