type Graph = { [node: string]: string[] };

function depthLimitedSearchIterative(
  graph: Graph,
  start: string,
  goal: string,
  limit: number
): string[] | null {
  type StackItem = { node: string; depth: number; path: string[] };

  const stack: StackItem[] = [{ node: start, depth: 0, path: [start] }];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const { node, depth, path } = stack.pop()!;

    if (node === goal) {
      return path; // Found the goal, return path
    }

    if (depth < limit) {
      visited.add(node);
      const neighbors = graph[node] || [];

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push({ node: neighbor, depth: depth + 1, path: [...path, neighbor] });
        }
      }
    }
  }

  // Not found within depth limit
  return null;
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

const result = depthLimitedSearchIterative(graph, "A", "F", 2);
console.log(result); // Might print something like [ 'A', 'C', 'F' ] or [ 'A', 'B', 'E', 'F' ] depending on structure (depth limit is 2)
