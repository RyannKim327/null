type Node = string | number; // Define the type for nodes (can be strings or numbers)
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

/**
 * Depth-Limited Search function
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param goal - The target node to search for
 * @param limit - The maximum depth limit for the search
 * @returns A boolean indicating whether the goal was found, and the path if found
 */
function depthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  limit: number
): { found: boolean; path: Node[] } {
  const result = dls(graph, start, goal, limit, []);
  return { found: result.found, path: result.path };
}

/**
 * Recursive helper function for DLS
 * @param graph - The graph represented as an adjacency list
 * @param node - The current node being explored
 * @param goal - The target node to search for
 * @param limit - The remaining depth limit
 * @param path - The current path taken to reach the node
 * @returns An object indicating whether the goal was found and the path
 */
function dls(
  graph: Graph,
  node: Node,
  goal: Node,
  limit: number,
  path: Node[]
): { found: boolean; path: Node[] } {
  // Add the current node to the path
  path.push(node);

  // Base case: If the current node is the goal, return success
  if (node === goal) {
    return { found: true, path };
  }

  // Base case: If the depth limit is reached, stop further exploration
  if (limit === 0) {
    path.pop(); // Remove the current node from the path before backtracking
    return { found: false, path };
  }

  // Recursive case: Explore neighbors
  const neighbors = graph.get(node) || [];
  for (const neighbor of neighbors) {
    const result = dls(graph, neighbor, goal, limit - 1, path);
    if (result.found) {
      return result; // Goal found, propagate the result up
    }
  }

  // Backtrack: Remove the current node from the path
  path.pop();
  return { found: false, path };
}

// Example Usage
const graph = new Map<Node, Node[]>([
  ["A", ["B", "C"]],
  ["B", ["D", "E"]],
  ["C", ["F"]],
  ["D", []],
  ["E", ["F"]],
  ["F", []],
]);

const startNode: Node = "A";
const goalNode: Node = "F";
const depthLimit = 2;

const { found, path } = depthLimitedSearch(graph, startNode, goalNode, depthLimit);

if (found) {
  console.log(`Goal found! Path: ${path.join(" -> ")}`);
} else {
  console.log("Goal not found within the depth limit.");
}
