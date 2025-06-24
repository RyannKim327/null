type Node = string; // Node identifier (can be customized)
type Graph = Map<Node, Node[]>; // Adjacency list representation

/**
 * Breadth-Limited Search Algorithm
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param goal - The target node to find
 * @param depthLimit - The maximum depth to explore
 * @returns The path to the goal if found, otherwise null
 */
function breadthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  depthLimit: number
): Node[] | null {
  const queue: { node: Node; path: Node[]; depth: number }[] = [];
  const visited = new Set<Node>();

  // Initialize the queue with the start node
  queue.push({ node: start, path: [start], depth: 0 });

  while (queue.length > 0) {
    const { node, path, depth } = queue.shift()!;

    // Skip if already visited
    if (visited.has(node)) continue;
    visited.add(node);

    // Check if the goal is reached
    if (node === goal) {
      return path;
    }

    // Stop expanding if the depth limit is reached
    if (depth >= depthLimit) continue;

    // Expand the current node
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push({ node: neighbor, path: [...path, neighbor], depth: depth + 1 });
      }
    }
  }

  // Goal not found within the depth limit
  return null;
}

// Example Usage
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
const depthLimit = 3;

const result = breadthLimitedSearch(graph, startNode, goalNode, depthLimit);

if (result) {
  console.log(`Path to goal: ${result.join(' -> ')}`);
} else {
  console.log('Goal not found within the depth limit.');
}
Path to goal: A -> B -> E -> G
Goal not found within the depth limit.
