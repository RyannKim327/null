type Node = string | number;
type Graph = Map<Node, Node[]>;

function breadthLimitedSearch(
  graph: Graph,
  startNode: Node,
  goalNode: Node,
  depthLimit: number
): Node[] | null {
  // Queue stores tuples of [currentNode, currentDepth]
  const queue: [Node, number][] = [[startNode, 0]];
  const visited = new Set<Node>();

  while (queue.length > 0) {
    const [currentNode, currentDepth] = queue.shift()!;

    // Skip if the node is already visited
    if (visited.has(currentNode)) continue;

    // Mark the node as visited
    visited.add(currentNode);

    // If the goal is found, return the path
    if (currentNode === goalNode) {
      return [currentNode]; // You can modify this to return the full path if needed
    }

    // If the current depth exceeds the depth limit, skip further exploration
    if (currentDepth >= depthLimit) continue;

    // Add neighbors to the queue with incremented depth
    const neighbors = graph.get(currentNode) || [];
    for (const neighbor of neighbors) {
      queue.push([neighbor, currentDepth + 1]);
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

const startNode = "A";
const goalNode = "G";
const depthLimit = 3;

const result = breadthLimitedSearch(graph, startNode, goalNode, depthLimit);
if (result) {
  console.log(`Goal node "${goalNode}" found within depth limit.`);
} else {
  console.log(`Goal node "${goalNode}" not found within depth limit.`);
}
        A
       / \
      B   C
     / \   \
    D   E   F
        \
         G
