type Node = string; // or whatever your node type is

function depthLimitedSearchIterative(
  start: Node,
  isGoal: (node: Node) => boolean,
  getChildren: (node: Node) => Node[],
  limit: number
): Node | null {
  // Stack holds tuples: [node, depth]
  const stack: Array<[Node, number]> = [[start, 0]];
  const visited = new Set<Node>();

  while (stack.length > 0) {
    const [node, depth] = stack.pop()!;

    if (isGoal(node)) {
      return node; // goal found
    }

    if (depth < limit) {
      // To avoid cycles, optionally track visited nodes
      if (!visited.has(node)) {
        visited.add(node);
        const children = getChildren(node);
        for (const child of children) {
          stack.push([child, depth + 1]);
        }
      }
    }
  }

  // Goal not found within depth limit
  return null;
}
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E', 'F'],
  D: [],
  E: [],
  F: []
};

function isGoal(node: string) {
  return node === 'E';
}

function getChildren(node: string): string[] {
  return graph[node] || [];
}

const result = depthLimitedSearchIterative('A', isGoal, getChildren, 2);
console.log(result); // Should output "E" if found, or null if not within depth 2
