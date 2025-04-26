interface Graph {
  [node: string]: string[]; // mapping of nodes to their neighbors
}
type Node = string;

function biDirectionalSearch(graph: Graph, start: Node, goal: Node): Node[] | null {
  if (start === goal) return [start];

  const visitedFromStart = new Set<Node>();
  const visitedFromGoal = new Set<Node>();

  const queueFromStart = [start];
  const queueFromGoal = [goal];

  const parentFromStart: { [key: string]: Node | null } = { [start]: null };
  const parentFromGoal: { [key: string]: Node | null } = { [goal]: null };

  while (queueFromStart.length > 0 && queueFromGoal.length > 0) {
    // Explore from the start
    const result = explore(queueFromStart, visitedFromStart, visitedFromGoal, graph, parentFromStart);
    if (result) return result;

    // Explore from the goal
    const resultFromGoal = explore(queueFromGoal, visitedFromGoal, visitedFromStart, graph, parentFromGoal);
    if (resultFromGoal) return resultFromGoal;
  }

  return null; // No path found
}

function explore(
  queue: Node[],
  visited: Set<Node>,
  otherVisited: Set<Node>,
  graph: Graph,
  parentMap: { [key: string]: Node | null }
): Node[] | null {
  const currentNode = queue.shift()!;
  visited.add(currentNode);

  for (const neighbor of graph[currentNode] || []) {
    if (otherVisited.has(neighbor)) {
      return reconstructPath(neighbor, parentMap, otherVisited); // Path found
    }
    if (!visited.has(neighbor)) {
      queue.push(neighbor);
      visited.add(neighbor);
      parentMap[neighbor] = currentNode;
    }
  }

  return null; // No path found in this direction
}

function reconstructPath(meetingPoint: Node, parentFromStart: { [key: string]: Node | null }, parentFromGoal: { [key: string]: Node | null }): Node[] {
  const path = [];
  let current: Node | null = meetingPoint;

  // Backtrack from the meeting point to the start
  while (current !== null) {
    path.push(current);
    current = parentFromStart[current] || null;
  }
  
  path.reverse(); // Reverse to get the start to meeting point path

  current = parentFromGoal[meetingPoint];

  // Backtrack from the meeting point to the goal
  while (current !== null) {
    path.push(current);
    current = parentFromGoal[current] || null;
  }

  return path; // Complete path
}
const graph: Graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'G'],
  F: ['C', 'H'],
  G: ['E'],
  H: ['F']
};

const startNode = 'A';
const goalNode = 'G';
const path = biDirectionalSearch(graph, startNode, goalNode);
console.log(path); // Outputs: ['A', 'B', 'E', 'G'] or similar
