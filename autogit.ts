type Graph = Map<string, string[]>;

interface SearchResult {
  found: boolean;
  path?: string[];
}

function breadthLimitedSearch(
  graph: Graph,
  start: string,
  goal: string,
  limit: number
): SearchResult {
  // Each queue element will hold the node and the path taken to reach it
  const queue: Array<{ node: string; path: string[] }> = [];
  queue.push({ node: start, path: [start] });

  while (queue.length > 0) {
    const { node, path } = queue.shift()!;

    if (node === goal) {
      return { found: true, path };
    }

    if (path.length - 1 < limit) {
      const neighbors = graph.get(node) || [];
      for (const neighbor of neighbors) {
        if (!path.includes(neighbor)) {
          queue.push({ node: neighbor, path: [...path, neighbor] });
        }
      }
    }
  }

  return { found: false };
}
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['D', 'E']],
  ['C', ['F']],
  ['D', []],
  ['E', ['F']],
  ['F', []],
]);

const result = breadthLimitedSearch(graph, 'A', 'F', 2);
if (result.found) {
  console.log('Found path:', result.path);
} else {
  console.log('Path not found within depth limit');
}
