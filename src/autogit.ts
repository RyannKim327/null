// Define a Node type
type Node = string;

// Define a Graph as an adjacency list
type Graph = Map<Node, Node[]>;

/**
 * Breadth-Limited Search Function
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param goal - The target node to find
 * @param depthLimit - The maximum depth to explore
 * @returns The path from start to goal if found within the depth limit, otherwise null
 */
function breadthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  depthLimit: number
): Node[] | null {
  // Queue stores tuples of [currentNode, currentPath, currentDepth]
  const queue: [Node, Node[], number][] = [[start, [start], 0]];

  // Visited set to avoid revisiting nodes at the same depth
  const visited = new Set<Node>();

  while (queue.length > 0) {
    const [currentNode, currentPath, currentDepth] = queue.shift()!;

    // If the current node is the goal, return the path
    if (currentNode === goal) {
      return currentPath;
    }

    // If the current depth exceeds the depth limit, skip further exploration
    if (currentDepth >= depthLimit) {
      continue;
    }

    // Mark the current node as visited at this depth
    visited.add(currentNode);

    // Add neighbors to the queue if they haven't been visited
    for (const neighbor of graph.get(currentNode) || []) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, [...currentPath, neighbor], currentDepth + 1]);
      }
    }
  }

  // If the goal is not found within the depth limit, return null
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

const startNode: Node = "A";
const goalNode: Node = "G";
const depthLimit: number = 3;

const result = breadthLimitedSearch(graph, startNode, goalNode, depthLimit);

if (result) {
  console.log(`Path found: ${result.join(" -> ")}`);
} else {
  console.log("No path found within the depth limit.");
}
        A
       / \
      B   C
     / \   \
    D   E   F
        \
         G
