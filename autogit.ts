type Graph = Map<string, string[]>;

interface QueueItem {
  node: string;
  depth: number;
}

function breadthLimitedSearch(graph: Graph, start: string, goal: string, limit: number): string[] | null {
  // Queue holds nodes along with their depth from the start node
  const queue: QueueItem[] = [{ node: start, depth: 0 }];
  const visited = new Set<string>();
  // Map to reconstruct path after finding the goal
  const parentMap = new Map<string, string | null>();
  parentMap.set(start, null);

  while (queue.length > 0) {
    const { node, depth } = queue.shift()!;

    if (node === goal) {
      // Reconstruct path going backward from goal to start
      const path: string[] = [];
      let current: string | null = node;
      while (current !== null) {
        path.push(current);
        current = parentMap.get(current) ?? null;
      }
      return path.reverse();
    }

    if (depth < limit) {
      const neighbors = graph.get(node) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parentMap.set(neighbor, node);
          queue.push({ node: neighbor, depth: depth + 1 });
        }
      }
    }
  }

  // Goal not found within the depth limit
  return null;
}
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['D', 'E']],
  ['C', ['F']],
  ['D', []],
  ['E', ['F']],
  ['F', []],
]);

const start = 'A';
const goal = 'F';
const depthLimit = 2;

const path = breadthLimitedSearch(graph, start, goal, depthLimit);
if (path) {
  console.log(`Path found: ${path.join(' -> ')}`);
} else {
  console.log(`No path found within depth limit ${depthLimit}`);
}
