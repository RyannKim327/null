type Graph = Record<string, string[]>;

function breadthLimitedSearch(
  graph: Graph,
  start: string,
  target: string,
  maxDepth: number
): string[] | null {
  type QueueItem = { node: string; depth: number; path: string[] };
  const queue: QueueItem[] = [{ node: start, depth: 0, path: [start] }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const { node, depth, path } = queue.shift()!;

    if (node === target) {
      return path;
    }

    if (depth >= maxDepth) continue; // Limit the depth

    if (!visited.has(node)) {
      visited.add(node);
      const neighbors = graph[node] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push({
            node: neighbor,
            depth: depth + 1,
            path: [...path, neighbor],
          });
        }
      }
    }
  }

  return null; // No path found within depth limit
}
