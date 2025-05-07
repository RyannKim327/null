type Graph = Map<string, string[]>;

interface QueueElement {
  node: string;
  depth: number;
}

function breadthLimitedSearch(graph: Graph, start: string, goal: string, limit: number): string[] | null {
  const queue: QueueElement[] = [{ node: start, depth: 0 }];
  const visited = new Set<string>();
  const parent = new Map<string, string | null>();

  parent.set(start, null);

  while (queue.length > 0) {
    const { node, depth } = queue.shift()!;

    if (node === goal) {
      // Reconstruct path by tracing parents
      const path: string[] = [];
      let current: string | null = node;
      while (current !== null) {
        path.push(current);
        current = parent.get(current) ?? null;
      }
      return path.reverse();
    }

    if (depth < limit) {
      const neighbors = graph.get(node) ?? [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          parent.set(neighbor, node);
          queue.push({ node: neighbor, depth: depth + 1 });
        }
      }
    }
  }

  // No path found within depth limit
  return null;
}
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['D']],
  ['C', ['E']],
  ['D', []],
  ['E', ['F']],
  ['F', []],
]);

const start = 'A';
const goal = 'F';
const depthLimit = 2;

const path = breadthLimitedSearch(graph, start, goal, depthLimit);
console.log(path); // null, because 'F' is at depth 3
