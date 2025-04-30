type Graph<T> = Map<T, T[]>;

function bidirectionalSearch<T>(
  graph: Graph<T>,
  start: T,
  goal: T
): T[] | null {
  if (start === goal) return [start];

  // Queues for BFS from start and goal
  const frontierStart: T[] = [start];
  const frontierGoal: T[] = [goal];

  // Visited maps to track from where we came
  const visitedStart = new Map<T, T | null>();
  const visitedGoal = new Map<T, T | null>();
  visitedStart.set(start, null);
  visitedGoal.set(goal, null);

  // Helper to build path once meeting point is found
  function buildPath(meetNode: T): T[] {
    const pathStart: T[] = [];
    let current: T | null = meetNode;
    while (current !== null) {
      pathStart.push(current);
      current = visitedStart.get(current) || null;
    }
    pathStart.reverse();

    const pathGoal: T[] = [];
    current = visitedGoal.get(meetNode) || null;
    while (current !== null) {
      pathGoal.push(current);
      current = visitedGoal.get(current) || null;
    }

    return pathStart.concat(pathGoal);
  }

  while (frontierStart.length > 0 && frontierGoal.length > 0) {
    // Expand one step from start side
    const currentStart = frontierStart.shift()!;
    const neighborsStart = graph.get(currentStart) || [];
    for (const neighbor of neighborsStart) {
      if (!visitedStart.has(neighbor)) {
        visitedStart.set(neighbor, currentStart);
        frontierStart.push(neighbor);
        if (visitedGoal.has(neighbor)) {
          return buildPath(neighbor);
        }
      }
    }

    // Expand one step from goal side
    const currentGoal = frontierGoal.shift()!;
    const neighborsGoal = graph.get(currentGoal) || [];
    for (const neighbor of neighborsGoal) {
      if (!visitedGoal.has(neighbor)) {
        visitedGoal.set(neighbor, currentGoal);
        frontierGoal.push(neighbor);
        if (visitedStart.has(neighbor)) {
          return buildPath(neighbor);
        }
      }
    }
  }

  // No connection found
  return null;
}
const graph = new Map<string, string[]>([
  ['A', ['B', 'C']],
  ['B', ['A', 'D']],
  ['C', ['A', 'D']],
  ['D', ['B', 'C', 'E']],
  ['E', ['D']],
]);

const path = bidirectionalSearch(graph, 'A', 'E');
console.log(path); // Example output: ['A', 'B', 'D', 'E'] or ['A', 'C', 'D', 'E']
