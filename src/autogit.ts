type Graph = Map<number, number[]>;

const graph: Graph = new Map([
  [0, [1, 2]],
  [1, [0, 3, 4]],
  [2, [0, 5]],
  [3, [1]],
  [4, [1, 5]],
  [5, [2, 4]],
]);
function bfsStep(
  queue: number[],
  visited: Set<number>,
  graph: Graph,
  intersection: Map<number, number>
): boolean {
  const current = queue.shift(); // Get the next node to explore
  if (current === undefined) return false;

  for (const neighbor of graph.get(current) || []) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      queue.push(neighbor);

      // Check if this neighbor has been visited by the other search
      if (intersection.has(neighbor)) {
        intersection.set(neighbor, current); // Record the connection
        return true; // Intersection found
      }
    }
  }

  return false;
}
function bidirectionalSearch(graph: Graph, start: number, goal: number): number[] | null {
  const forwardQueue: number[] = [start];
  const backwardQueue: number[] = [goal];

  const forwardVisited = new Set<number>([start]);
  const backwardVisited = new Set<number>([goal]);

  const intersection = new Map<number, number>(); // To track the meeting point

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Perform one step of BFS from the start
    if (bfsStep(forwardQueue, forwardVisited, graph, intersection)) {
      return reconstructPath(intersection, start, goal);
    }

    // Perform one step of BFS from the goal
    if (bfsStep(backwardQueue, backwardVisited, graph, intersection)) {
      return reconstructPath(intersection, start, goal);
    }
  }

  return null; // No path found
}
function reconstructPath(
  intersection: Map<number, number>,
  start: number,
  goal: number
): number[] {
  const meetingPoint = Array.from(intersection.keys())[0];
  const path: number[] = [];

  // Trace path from start to meeting point
  let current = meetingPoint;
  while (current !== start) {
    path.unshift(current);
    current = intersection.get(current)!;
  }
  path.unshift(start);

  // Trace path from meeting point to goal
  current = meetingPoint;
  while (current !== goal) {
    current = intersection.get(current)!;
    path.push(current);
  }

  return path;
}
const start = 0;
const goal = 5;

const path = bidirectionalSearch(graph, start, goal);

if (path) {
  console.log("Path found:", path);
} else {
  console.log("No path exists between start and goal.");
}
