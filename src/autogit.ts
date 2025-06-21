type Node = string | number; // Define the type for nodes (can be strings or numbers)
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

/**
 * Breadth-Limited Search Algorithm
 * @param graph - The graph represented as an adjacency list
 * @param startNode - The starting node for the search
 * @param goalNode - The target node to find
 * @param depthLimit - The maximum depth to explore
 * @returns The path from startNode to goalNode if found, otherwise null
 */
function breadthLimitedSearch(
  graph: Graph,
  startNode: Node,
  goalNode: Node,
  depthLimit: number
): Node[] | null {
  // Queue stores tuples of [currentNode, currentPath, currentDepth]
  const queue: [Node, Node[], number][] = [[startNode, [startNode], 0]];

  while (queue.length > 0) {
    const [currentNode, path, currentDepth] = queue.shift()!;

    // If the current node is the goal and within the depth limit, return the path
    if (currentNode === goalNode && currentDepth <= depthLimit) {
      return path;
    }

    // Stop exploring further if the depth limit is reached
    if (currentDepth >= depthLimit) {
      continue;
    }

    // Explore neighbors of the current node
    const neighbors = graph.get(currentNode) || [];
    for (const neighbor of neighbors) {
      queue.push([neighbor, [...path, neighbor], currentDepth + 1]);
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
  console.log("Path found:", result);
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
