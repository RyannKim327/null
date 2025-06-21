type Graph = Map<string, string[]>; // Adjacency list representation of the graph

/**
 * Function to perform Depth-Limited Search (DLS)
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param goal - The goal node to search for
 * @param limit - The maximum depth limit for the search
 * @returns A boolean indicating success or failure, and optionally the path if found
 */
function depthLimitedSearch(
  graph: Graph,
  start: string,
  goal: string,
  limit: number
): { found: boolean; path?: string[] } {
  // Helper function for recursive DLS
  function dlsRecursive(
    node: string,
    currentLimit: number,
    visited: Set<string>,
    path: string[]
  ): { found: boolean; path?: string[] } {
    // Base case: If the current node is the goal, return success and the path
    if (node === goal) {
      return { found: true, path: [...path, node] };
    }

    // Base case: If the depth limit is reached, stop further exploration
    if (currentLimit <= 0) {
      return { found: false };
    }

    // Mark the current node as visited and add it to the path
    visited.add(node);
    path.push(node);

    // Explore all neighbors of the current node
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        const result = dlsRecursive(neighbor, currentLimit - 1, visited, path);
        if (result.found) {
          return result; // Goal found, propagate the result
        }
      }
    }

    // Backtrack: Remove the current node from the path and unvisit it
    path.pop();
    visited.delete(node);

    return { found: false }; // Goal not found in this branch
  }

  // Initialize the search with the start node, depth limit, and empty visited set
  const visited = new Set<string>();
  const path: string[] = [];
  return dlsRecursive(start, limit, visited, path);
}

// Example usage:
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

const result = depthLimitedSearch(graph, startNode, goalNode, depthLimit);
if (result.found) {
  console.log(`Goal found! Path: ${result.path?.join(" -> ")}`);
} else {
  console.log("Goal not found within the depth limit.");
}
Goal found! Path: A -> B -> E -> G
Goal not found within the depth limit.
