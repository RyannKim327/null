function depthLimitedSearch<Node>(
  start: Node,
  isGoal: (node: Node) => boolean,
  getSuccessors: (node: Node) => Node[],
  limit: number
): Node | null {
  // Inner recursive function
  function recursiveDLS(node: Node, depth: number): Node | null {
    if (isGoal(node)) {
      return node;
    }
    if (depth === 0) {
      return null; // limit reached without success
    }
    
    for (const child of getSuccessors(node)) {
      const result = recursiveDLS(child, depth - 1);
      if (result !== null) {
        return result;
      }
    }
    return null; // no solution found at this branch
  }

  return recursiveDLS(start, limit);
}
const graph: Record<string, string[]> = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

const startNode = 'A';
const goalNode = 'F';

const found = depthLimitedSearch(
  startNode,
  (node) => node === goalNode,
  (node) => graph[node] || [],
  3
);

console.log(found); // 'F' if within depth limit, else null
