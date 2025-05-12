type Node = string; // You can adjust this to any type representing a node
type Graph = Map<Node, Node[]>;

interface SearchData {
  queue: Node[];
  visited: Set<Node>;
  parents: Map<Node, Node | null>;
}

function biDirectionalSearch(graph: Graph, start: Node, goal: Node): Node[] | null {
  if (start === goal) return [start];

  // Search data for forward and backward searches
  const forward: SearchData = {
    queue: [start],
    visited: new Set([start]),
    parents: new Map([[start, null]]),
  };

  const backward: SearchData = {
    queue: [goal],
    visited: new Set([goal]),
    parents: new Map([[goal, null]]),
  };

  // Helper to reconstruct path after meeting point is found
  const constructPath = (meetNode: Node): Node[] => {
    const path: Node[] = [];

    // Build path from start to meeting node
    let current: Node | null = meetNode;
    const pathStart: Node[] = [];
    while (current !== null) {
      pathStart.push(current);
      current = forward.parents.get(current) || null;
    }
    pathStart.reverse();

    // Build path from meeting node to goal
    current = backward.parents.get(meetNode) || null;
    const pathGoal: Node[] = [];
    while (current !== null) {
      pathGoal.push(current);
      current = backward.parents.get(current) || null;
    }

    return [...pathStart, ...pathGoal];
  };

  // Run the search expanding from smaller frontier alternatively
  while (forward.queue.length > 0 && backward.queue.length > 0) {
    // Expand forward frontier
    if (expandFrontier(graph, forward, backward)) {
      // Meeting point found, construct path
      const meetingNode = findIntersection(forward.visited, backward.visited);
      if (meetingNode) return constructPath(meetingNode);
    }

    // Expand backward frontier
    if (expandFrontier(graph, backward, forward)) {
      const meetingNode = findIntersection(forward.visited, backward.visited);
      if (meetingNode) return constructPath(meetingNode);
    }
  }

  return null; // No path found
}

// Helper to expand the frontier by one step
function expandFrontier(graph: Graph, current: SearchData, other: SearchData): boolean {
  const currentLevelSize = current.queue.length;
  for (let i = 0; i < currentLevelSize; i++) {
    const node = current.queue.shift();
    if (!node) continue;

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!current.visited.has(neighbor)) {
        current.visited.add(neighbor);
        current.parents.set(neighbor, node);
        current.queue.push(neighbor);

        // Check if neighbor is visited by the other search direction
        if (other.visited.has(neighbor)) {
          return true;
        }
      }
    }
  }
  return false;
}

// Helper to find a meeting node
function findIntersection(set1: Set<Node>, set2: Set<Node>): Node | null {
  for (const node of set1) {
    if (set2.has(node)) return node;
  }
  return null;
}
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['A', 'D', 'E']],
  ['C', ['A', 'F']],
  ['D', ['B']],
  ['E', ['B', 'F']],
  ['F', ['C', 'E']]
]);

const path = biDirectionalSearch(graph, 'A', 'F'); 
console.log(path); 
// Might output: ['A', 'C', 'F'] or ['A', 'B', 'E', 'F']
