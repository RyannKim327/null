type Node = string; // or number or a more complex type, but string works for example

function biDirectionalSearch(
  graph: Map<Node, Node[]>,
  start: Node,
  goal: Node
): Node[] | null {
  if (start === goal) return [start];

  // Queues for BFS frontiers
  let forwardQueue: Node[] = [start];
  let backwardQueue: Node[] = [goal];

  // Visited maps to track parents for path reconstruction
  const forwardVisited = new Map<Node, Node | null>([[start, null]]);
  const backwardVisited = new Map<Node, Node | null>([[goal, null]]);

  function visitFrontier(
    currentQueue: Node[],
    currentVisited: Map<Node, Node | null>,
    otherVisited: Map<Node, Node | null>
  ): Node | null {
    if (currentQueue.length === 0) return null;

    const currentNode = currentQueue.shift()!;
    const neighbors = graph.get(currentNode) || [];

    for (const neighbor of neighbors) {
      if (!currentVisited.has(neighbor)) {
        currentQueue.push(neighbor);
        currentVisited.set(neighbor, currentNode);

        // Check if neighbor is visited in other search
        if (otherVisited.has(neighbor)) {
          return neighbor; // Meeting point found
        }
      }
    }
    return null;
  }

  // Reconstruct path from meeting node
  function constructPath(
    meetingNode: Node,
    forwardVisited: Map<Node, Node | null>,
    backwardVisited: Map<Node, Node | null>
  ): Node[] {
    const path: Node[] = [];

    // Build path from start to meeting node
    let node: Node | null = meetingNode;
    while (node !== null) {
      path.push(node);
      node = forwardVisited.get(node) || null;
    }
    path.reverse();

    // Build path from meeting node to goal (excluding meeting node duplicate)
    node = backwardVisited.get(meetingNode) || null;
    while (node !== null) {
      path.push(node);
      node = backwardVisited.get(node) || null;
    }

    return path;
  }

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Expand forward frontier
    let meetingNode = visitFrontier(forwardQueue, forwardVisited, backwardVisited);
    if (meetingNode) {
      return constructPath(meetingNode, forwardVisited, backwardVisited);
    }

    // Expand backward frontier
    meetingNode = visitFrontier(backwardQueue, backwardVisited, forwardVisited);
    if (meetingNode) {
      return constructPath(meetingNode, forwardVisited, backwardVisited);
    }
  }

  return null; // No path found
}
const graph = new Map<string, string[]>([
  ['A', ['B', 'C']],
  ['B', ['A', 'D']],
  ['C', ['A', 'D']],
  ['D', ['B', 'C', 'E']],
  ['E', ['D']]
]);

const path = biDirectionalSearch(graph, 'A', 'E');
console.log(path); // Example output: ['A', 'B', 'D', 'E']
