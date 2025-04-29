interface Node {
  id: string; // or any data you want to store
  children?: Node[];
}

/**
 * Performs a breadth-limited search on a graph/tree.
 * @param root - starting node
 * @param targetId - the id we're searching for
 * @param limit - maximum depth to search
 * @returns the node if found, else null
 */
function breadthLimitedSearch(
  root: Node,
  targetId: string,
  limit: number
): Node | null {
  // Queue holds nodes along with their current depth
  const queue: Array<{ node: Node; depth: number }> = [{ node: root, depth: 0 }];

  while (queue.length > 0) {
    const { node, depth } = queue.shift()!;
    
    // Check if current node matches target
    if (node.id === targetId) {
      return node;
    }

    // Limit search to specified depth
    if (depth < limit && node.children) {
      for (const child of node.children) {
        queue.push({ node: child, depth: depth + 1 });
      }
    }
  }

  // Not found within depth limit
  return null;
}
