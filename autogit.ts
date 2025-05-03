type Graph = Map<string, string[]>;  // Map from node to list of adjacent nodes

function biDirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
  if (start === goal) return [start];

  // Forwards and backwards frontiers
  let frontierStart = new Set([start]);
  let frontierGoal = new Set([goal]);

  // Visited nodes with parent information to reconstruct path
  const parentsStart = new Map<string, string | null>();
  const parentsGoal = new Map<string, string | null>();

  parentsStart.set(start, null);
  parentsGoal.set(goal, null);

  // Helper function to reconstruct path once meeting point found
  function reconstructPath(meetingNode: string): string[] {
    const pathStart: string[] = [];
    let node: string | null = meetingNode;
    while (node !== null) {
      pathStart.push(node);
      node = parentsStart.get(node) ?? null;
    }
    pathStart.reverse();

    const pathGoal: string[] = [];
    node = parentsGoal.get(meetingNode) ?? null;
    while (node !== null) {
      pathGoal.push(node);
      node = parentsGoal.get(node) ?? null;
    }

    return pathStart.concat(pathGoal);
  }

  while (frontierStart.size > 0 && frontierGoal.size > 0) {
    // Expand from start side
    const nextFrontierStart = new Set<string>();
    for (const current of frontierStart) {
      for (const neighbor of graph.get(current) || []) {
        if (!parentsStart.has(neighbor)) {
          parentsStart.set(neighbor, current);
          nextFrontierStart.add(neighbor);
          if (parentsGoal.has(neighbor)) {
            return reconstructPath(neighbor);
          }
        }
      }
    }
    frontierStart = nextFrontierStart;

    // Expand from goal side
    const nextFrontierGoal = new Set<string>();
    for (const current of frontierGoal) {
      for (const neighbor of graph.get(current) || []) {
        if (!parentsGoal.has(neighbor)) {
          parentsGoal.set(neighbor, current);
          nextFrontierGoal.add(neighbor);
          if (parentsStart.has(neighbor)) {
            return reconstructPath(neighbor);
          }
        }
      }
    }
    frontierGoal = nextFrontierGoal;
  }

  // No path found
  return null;
}
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['A', 'D']],
  ['C', ['A', 'E']],
  ['D', ['B', 'F']],
  ['E', ['C', 'F']],
  ['F', ['D', 'E']],
]);

console.log(biDirectionalSearch(graph, 'A', 'F')); 
// Output: ['A', 'B', 'D', 'F'] or ['A', 'C', 'E', 'F'] depending on search order
