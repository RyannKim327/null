type Node = string;  // or a more complex object
type Graph = Map<Node, Node[]>;

interface SearchResult {
  path: Node[];
  found: boolean;
}

function bidirectionalSearch(
  graph: Graph,
  start: Node,
  goal: Node
): SearchResult {
  if (start === goal) return { path: [start], found: true };

  // Initialize frontiers
  const forwardQueue: Node[] = [start];
  const backwardQueue: Node[] = [goal];

  // Visited maps for path reconstruction
  const visitedForward: Map<Node, Node | null> = new Map([[start, null]]);
  const visitedBackward: Map<Node, Node | null> = new Map([[goal, null]]);

  while (forwardQueue.length && backwardQueue.length) {
    // Expand the smaller frontier for efficiency
    if (forwardQueue.length <= backwardQueue.length) {
      if (expandFrontier(graph, forwardQueue, visitedForward, visitedBackward)) {
        return reconstructPath(visitedForward, visitedBackward, start, goal);
      }
    } else {
      if (expandFrontier(graph, backwardQueue, visitedBackward, visitedForward)) {
        return reconstructPath(visitedForward, visitedBackward, start, goal);
      }
    }
  }

  return { path: [], found: false };
}

function expandFrontier(
  graph: Graph,
  frontier: Node[],
  visited: Map<Node, Node | null>,
  otherVisited: Map<Node, Node | null>
): boolean {
  const current = frontier.shift()!;
  for (const neighbor of graph.get(current) || []) {
    if (!visited.has(neighbor)) {
      visited.set(neighbor, current);
      frontier.push(neighbor);
      if (otherVisited.has(neighbor)) {
        // Path found
        return true;
      }
    }
  }
  return false;
}

function reconstructPath(
  visitedForward: Map<Node, Node | null>,
  visitedBackward: Map<Node, Node | null>,
  start: Node,
  goal: Node
): SearchResult {
  let intersectionNode: Node | null = null;

  // Find the overlapping node
  for (const node of visitedForward.keys()) {
    if (visitedBackward.has(node)) {
      intersectionNode = node;
      break;
    }
  }

  if (!intersectionNode) {
    return { path: [], found: false };
  }

  // Build path from start to intersection
  const pathForward: Node[] = [];
  let current: Node | null = intersectionNode;
  while (current !== null) {
    pathForward.unshift(current);
    current = visitedForward.get(current) || null;
  }

  // Build path from intersection to goal
  const pathBackward: Node[] = [];
  current = visitedBackward.get(intersectionNode);
  while (current !== null) {
    pathBackward.push(current);
    current = visitedBackward.get(current) || null;
  }

  // Combine the paths
  const fullPath = [...pathForward, ...pathBackward.slice(1)];

  return { path: fullPath, found: true };
}

// Example usage:
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['A', 'D']],
  ['C', ['A', 'E']],
  ['D', ['B', 'F']],
  ['E', ['C', 'F']],
  ['F', ['D', 'E', 'G']],
  ['G', ['F']]
]);

const result = bidirectionalSearch(graph, 'A', 'G');
console.log(result);
