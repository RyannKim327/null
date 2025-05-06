type Graph = Map<string, string[]>;

function biDirectionalSearch(
  graph: Graph,
  start: string,
  goal: string
): string[] | null {
  if (start === goal) return [start];

  // Frontiers for BFS from start and goal
  const frontierStart = new Set<string>([start]);
  const frontierGoal = new Set<string>([goal]);

  // Visited nodes and their parents for path reconstruction
  const parentsStart = new Map<string, string | null>([[start, null]]);
  const parentsGoal = new Map<string, string | null>([[goal, null]]);

  while (frontierStart.size > 0 && frontierGoal.size > 0) {
    // Expand from start side
    const nextFrontierStart = new Set<string>();
    for (const current of frontierStart) {
      const neighbors = graph.get(current) || [];
      for (const neighbor of neighbors) {
        if (!parentsStart.has(neighbor)) {
          parentsStart.set(neighbor, current);
          nextFrontierStart.add(neighbor);
          if (frontierGoal.has(neighbor)) {
            // Intersection found - reconstruct path
            return reconstructPath(neighbor, parentsStart, parentsGoal);
          }
        }
      }
    }
    frontierStart.clear();
    for (const n of nextFrontierStart) frontierStart.add(n);

    // Expand from goal side
    const nextFrontierGoal = new Set<string>();
    for (const current of frontierGoal) {
      const neighbors = graph.get(current) || [];
      for (const neighbor of neighbors) {
        if (!parentsGoal.has(neighbor)) {
          parentsGoal.set(neighbor, current);
          nextFrontierGoal.add(neighbor);
          if (frontierStart.has(neighbor)) {
            // Intersection found - reconstruct path
            return reconstructPath(neighbor, parentsStart, parentsGoal);
          }
        }
      }
    }
    frontierGoal.clear();
    for (const n of nextFrontierGoal) frontierGoal.add(n);
  }

  // No path found
  return null;
}

function reconstructPath(
  meetingNode: string,
  parentsStart: Map<string, string | null>,
  parentsGoal: Map<string, string | null>
): string[] {
  const pathStart: string[] = [];
  let current: string | null = meetingNode;
  while (current !== null) {
    pathStart.push(current);
    current = parentsStart.get(current) || null;
  }
  pathStart.reverse();

  const pathGoal: string[] = [];
  current = parentsGoal.get(meetingNode) || null;
  while (current !== null) {
    pathGoal.push(current);
    current = parentsGoal.get(current) || null;
  }

  return pathStart.concat(pathGoal);
}
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['A', 'D']],
  ['C', ['A', 'E']],
  ['D', ['B', 'F']],
  ['E', ['C']],
  ['F', ['D']],
]);

const path = biDirectionalSearch(graph, 'A', 'F');
console.log(path); // e.g. ['A', 'B', 'D', 'F']
