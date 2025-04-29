type Node = {
  id: string;
  neighbors: Node[];
};

function breadthLimitedSearch(
  start: Node,
  goalId: string,
  maxDepth: number
): Node | null {
  // Each item in the queue holds current node + depth
  const queue: Array<{ node: Node; depth: number }> = [{ node: start, depth: 0 }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const { node, depth } = queue.shift()!;
    if (node.id === goalId) {
      return node; // Found the goal
    }

    if (depth < maxDepth) {
      visited.add(node.id);
      for (const neighbor of node.neighbors) {
        if (!visited.has(neighbor.id)) {
          queue.push({ node: neighbor, depth: depth + 1 });
        }
      }
    }
  }

  return null; // Not found within depth limit
}
