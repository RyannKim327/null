type Graph = Map<string, string[]>;

function bidirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
  if (start === goal) return [start];

  let frontierStart: string[] = [start];
  let frontierGoal: string[] = [goal];

  let visitedStart = new Set<string>([start]);
  let visitedGoal = new Set<string>([goal]);

  let parentStart = new Map<string, string>();
  let parentGoal = new Map<string, string>();

  while (frontierStart.length > 0 && frontierGoal.length > 0) {
    // Expand one level from the start side
    if (expandFrontier(graph, frontierStart, visitedStart, visitedGoal, parentStart)) {
      return reconstructPath(parentStart, parentGoal, visitedStart, visitedGoal, start, goal);
    }

    // Expand one level from the goal side
    if (expandFrontier(graph, frontierGoal, visitedGoal, visitedStart, parentGoal)) {
      return reconstructPath(parentStart, parentGoal, visitedStart, visitedGoal, start, goal);
    }
  }

  return null; // No path found
}

function expandFrontier(
  graph: Graph,
  frontier: string[],
  visitedThisSide: Set<string>,
  visitedOtherSide: Set<string>,
  parents: Map<string, string>
): boolean {
  let currentLevelSize = frontier.length;
  for (let i = 0; i < currentLevelSize; i++) {
    let current = frontier.shift()!;
    let neighbors = graph.get(current) ?? [];

    for (let neighbor of neighbors) {
      if (!visitedThisSide.has(neighbor)) {
        parents.set(neighbor, current);
        visitedThisSide.add(neighbor);
        frontier.push(neighbor);

        // Collision detected
        if (visitedOtherSide.has(neighbor)) {
          return true;
        }
      }
    }
  }
  return false;
}

function reconstructPath(
  parentStart: Map<string, string>,
  parentGoal: Map<string, string>,
  visitedStart: Set<string>,
  visitedGoal: Set<string>,
  start: string,
  goal: string
): string[] {
  // Find the intersection node
  let intersection: string | undefined;
  for (let node of visitedStart) {
    if (visitedGoal.has(node)) {
      intersection = node;
      break;
    }
  }
  if (!intersection) return [];

  // Build path from start to intersection
  let pathStart: string[] = [];
  let current: string | undefined = intersection;
  while (current !== undefined) {
    pathStart.push(current);
    current = parentStart.get(current);
  }
  pathStart.reverse();

  // Build path from intersection to goal
  let pathGoal: string[] = [];
  current = parentGoal.get(intersection);
  while (current !== undefined) {
    pathGoal.push(current);
    current = parentGoal.get(current);
  }

  return [...pathStart, ...pathGoal];
}

// Example usage:
let exampleGraph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['A', 'D', 'E']],
  ['C', ['A', 'F']],
  ['D', ['B']],
  ['E', ['B', 'F']],
  ['F', ['C', 'E']],
]);

console.log(bidirectionalSearch(exampleGraph, 'A', 'F')); // Possible output: ['A', 'C', 'F']
