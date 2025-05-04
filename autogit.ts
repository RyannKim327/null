type Node = string;
type Graph = Map<Node, Node[]>;

/**
 * Iterative Depth-Limited Search
 * @param graph The graph represented as an adjacency list
 * @param start The start node
 * @param goal The goal node to find
 * @param limit The depth limit for the search
 * @returns A path from start to goal if found, otherwise null
 */
function depthLimitedSearchIterative(graph: Graph, start: Node, goal: Node, limit: number): Node[] | null {
  // Stack elements hold current node and depth, and the path taken to reach the node
  const stack: Array<{ node: Node; depth: number; path: Node[] }> = [{ node: start, depth: 0, path: [start] }];

  while (stack.length > 0) {
    const { node, depth, path } = stack.pop()!;

    if (node === goal) {
      return path; // Found the goal, return the path
    }

    if (depth < limit) {
      // Explore neighbors if depth limit not reached
      const neighbors = graph.get(node) || [];
      for (const neighbor of neighbors) {
        if (!path.includes(neighbor)) { // Avoid cycles by checking path
          stack.push({ node: neighbor, depth: depth + 1, path: [...path, neighbor] });
        }
      }
    }
  }

  return null; // Goal not found within depth limit
}

// Example usage:

const graph: Graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D", "E"]],
  ["C", ["F"]],
  ["D", []],
  ["E", ["F"]],
  ["F", []],
]);

const startNode = "A";
const goalNode = "F";
const depthLimit = 3;

const resultPath = depthLimitedSearchIterative(graph, startNode, goalNode, depthLimit);
console.log(resultPath); // Example output: ["A", "C", "F"]
