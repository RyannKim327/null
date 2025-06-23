type Node = string | number; // Define the type of nodes in the graph

function bidirectionalSearch(
  graph: Map<Node, Node[]>, // Adjacency list representation of the graph
  start: Node,              // Starting node
  goal: Node                // Target node
): { path: Node[]; found: boolean } {
  // Helper function to reconstruct the path from the intersection point
  const reconstructPath = (
    forwardParent: Map<Node, Node>,
    backwardParent: Map<Node, Node>,
    intersection: Node
  ): Node[] => {
    const path: Node[] = [];
    let currentNode: Node | undefined = intersection;

    // Traverse from intersection to start
    while (currentNode !== undefined) {
      path.unshift(currentNode);
      currentNode = forwardParent.get(currentNode);
    }

    currentNode = backwardParent.get(intersection); // Start from intersection to goal
    while (currentNode !== undefined) {
      path.push(currentNode);
      currentNode = backwardParent.get(currentNode);
    }

    return path;
  };

  // Initialize data structures
  const forwardQueue: Node[] = [start];
  const backwardQueue: Node[] = [goal];

  const forwardVisited = new Set<Node>();
  const backwardVisited = new Set<Node>();

  const forwardParent = new Map<Node, Node>();
  const backwardParent = new Map<Node, Node>();

  forwardVisited.add(start);
  backwardVisited.add(goal);

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Perform one step of the forward BFS
    const forwardNode = forwardQueue.shift()!;
    for (const neighbor of graph.get(forwardNode) || []) {
      if (!forwardVisited.has(neighbor)) {
        forwardVisited.add(neighbor);
        forwardParent.set(neighbor, forwardNode);
        forwardQueue.push(neighbor);

        // Check if the neighbor has been visited by the backward search
        if (backwardVisited.has(neighbor)) {
          const path = reconstructPath(forwardParent, backwardParent, neighbor);
          return { path, found: true };
        }
      }
    }

    // Perform one step of the backward BFS
    const backwardNode = backwardQueue.shift()!;
    for (const neighbor of graph.get(backwardNode) || []) {
      if (!backwardVisited.has(neighbor)) {
        backwardVisited.add(neighbor);
        backwardParent.set(neighbor, backwardNode);
        backwardQueue.push(neighbor);

        // Check if the neighbor has been visited by the forward search
        if (forwardVisited.has(neighbor)) {
          const path = reconstructPath(forwardParent, backwardParent, neighbor);
          return { path, found: true };
        }
      }
    }
  }

  // If no intersection is found, return failure
  return { path: [], found: false };
}

// Example usage
const graph = new Map<string, string[]>([
  ["A", ["B", "C"]],
  ["B", ["A", "D", "E"]],
  ["C", ["A", "F"]],
  ["D", ["B"]],
  ["E", ["B", "F"]],
  ["F", ["C", "E"]],
]);

const result = bidirectionalSearch(graph, "A", "F");
console.log("Path:", result.path);
console.log("Found:", result.found);
Graph:
A -> B, C
B -> A, D, E
C -> A, F
D -> B
E -> B, F
F -> C, E

Start: A
Goal: F

Output:
Path: ["A", "C", "F"]
Found: true
