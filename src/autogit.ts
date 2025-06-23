type Node = string; // Replace with your node type (e.g., number, object, etc.)
type Graph = Map<Node, Node[]>; // Adjacency list representation

function depthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  depthLimit: number
): Node[] | null {
  // Stack to simulate DFS iteratively
  const stack: { node: Node; depth: number }[] = [{ node: start, depth: 0 }];
  const visited: Set<Node> = new Set(); // Track visited nodes to avoid cycles
  const path: Map<Node, Node> = new Map(); // To reconstruct the path

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;

    // Skip if already visited
    if (visited.has(node)) continue;
    visited.add(node);

    // Check if the goal is reached
    if (node === goal) {
      return reconstructPath(path, start, goal);
    }

    // Stop exploring if the depth limit is reached
    if (depth >= depthLimit) continue;

    // Push children onto the stack with incremented depth
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        stack.push({ node: neighbor, depth: depth + 1 });
        path.set(neighbor, node); // Record the parent for path reconstruction
      }
    }
  }

  // Goal not found within the depth limit
  return null;
}

// Helper function to reconstruct the path from start to goal
function reconstructPath(
  pathMap: Map<Node, Node>,
  start: Node,
  goal: Node
): Node[] {
  const path: Node[] = [];
  let current: Node | undefined = goal;

  while (current !== undefined) {
    path.push(current);
    current = pathMap.get(current);
  }

  path.reverse(); // Reverse to get the path from start to goal
  return path[0] === start ? path : []; // Ensure the path starts at the start node
}

// Example usage
const graph: Graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["D", "E"]],
  ["C", ["F"]],
  ["D", []],
  ["E", ["F"]],
  ["F", []],
]);

const startNode: Node = "A";
const goalNode: Node = "F";
const depthLimit: number = 2;

const result = depthLimitedSearch(graph, startNode, goalNode, depthLimit);

if (result) {
  console.log("Path found:", result.join(" -> "));
} else {
  console.log("No path found within the depth limit.");
}
Graph:
A -> B, C
B -> D, E
C -> F
D -> 
E -> F
F -> 

Start: A, Goal: F, Depth Limit: 2
Path found: A -> C -> F
No path found within the depth limit.
