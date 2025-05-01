type Graph = Record<string, string[]>;

function depthLimitedSearch(
  graph: Graph,
  start: string,
  goal: string,
  limit: number
): string[] | null {
  // Stack holds tuples: [node, path-so-far, depth]
  const stack: Array<[string, string[], number]> = [[start, [start], 0]];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const [node, path, depth] = stack.pop()!;

    if (node === goal) {
      return path;
    }

    if (depth < limit) {
      // Mark as visited at this depth context
      visited.add(node);

      const neighbors = graph[node] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push([neighbor, [...path, neighbor], depth + 1]);
        }
      }
    }
  }

  return null; // goal not found within limit
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

const result = depthLimitedSearch(graph, "A", "F", 2);
console.log(result); // Could print something like ['A', 'C', 'F']
