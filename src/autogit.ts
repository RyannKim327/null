type Node = string | number; // Define the type for nodes (can be string or number)
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

/**
 * Depth-Limited Search Algorithm
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param goal - The goal node to find
 * @param limit - The maximum depth to explore
 * @returns A boolean indicating whether the goal was found, and the path if found
 */
function depthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  limit: number
): { found: boolean; path: Node[] } {
  // Helper function for recursive DLS
  function dlsRecursive(
    current: Node,
    depth: number,
    visited: Set<Node>,
    path: Node[]
  ): { found: boolean; path: Node[] } {
    // Add the current node to the visited set and path
    visited.add(current);
    path.push(current);

    // Base case: If the current node is the goal, return success
    if (current === goal) {
      return { found: true, path };
    }

    // Base case: If the depth limit is reached, stop exploring further
    if (depth === 0) {
      path.pop(); // Remove the current node from the path
      return { found: false, path };
    }

    // Recursive case: Explore all neighbors
    const neighbors = graph.get(current) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        const result = dlsRecursive(neighbor, depth - 1, visited, path);
        if (result.found) {
          return result; // Goal found, propagate the result
        }
      }
    }

    // Backtrack: Remove the current node from the path
    path.pop();
    return { found: false, path };
  }

  // Initialize the search
  const visited = new Set<Node>();
  const path: Node[] = [];
  return dlsRecursive(start, limit, visited, path);
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

const result = depthLimitedSearch(graph, startNode, goalNode, depthLimit);
if (result.found) {
  console.log(`Goal found! Path: ${result.path.join(' -> ')}`);
} else {
  console.log('Goal not found within the depth limit.');
}
Goal found! Path: A -> B -> E -> G
Goal not found within the depth limit.
