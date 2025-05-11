type Graph = Record<string, string[]>;

interface StackItem {
  node: string;
  depth: number;
}

function depthLimitedSearch(graph: Graph, start: string, limit: number, goal?: string): string | null {
  const stack: StackItem[] = [{ node: start, depth: 0 }];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;
    if (visited.has(node)) continue;
    visited.add(node);

    // Check if current node is the goal (if provided)
    if (goal !== undefined && node === goal) {
      return node;
    }

    // Only expand if we have not reached the depth limit
    if (depth < limit) {
      for (const neighbor of graph[node] || []) {
        if (!visited.has(neighbor)) {
          stack.push({ node: neighbor, depth: depth + 1 });
        }
      }
    }
  }

  return null; // goal not found within depth limit or traversal ended
}

// Example usage:
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

console.log(depthLimitedSearch(graph, 'A', 2, 'F')); // Output: 'F' (found at depth <= 2)
console.log(depthLimitedSearch(graph, 'A', 1, 'F')); // Output: null (not found at depth <= 1)
