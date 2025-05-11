type Graph = Map<number, number[]>;

/**
 * Tarjan's algorithm to find Strongly Connected Components (SCCs)
 * @param graph - adjacency list representation of a directed graph
 * @returns an array of arrays, each inner array is a strongly connected component
 */
function tarjanSCC(graph: Graph): number[][] {
  let index = 0; // To assign unique index to each node
  const stack: number[] = [];
  const onStack = new Set<number>();

  const indices = new Map<number, number>(); // node -> index
  const lowLink = new Map<number, number>(); // node -> lowlink value
  const sccs: number[][] = [];

  function strongConnect(node: number) {
    // Set the depth index for node to the smallest unused index
    indices.set(node, index);
    lowLink.set(node, index);
    index++;
    stack.push(node);
    onStack.add(node);

    // Consider successors of node
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!indices.has(neighbor)) {
        // Neighbor not visited, recurse on it
        strongConnect(neighbor);
        lowLink.set(node, Math.min(lowLink.get(node)!, lowLink.get(neighbor)!));
      } else if (onStack.has(neighbor)) {
        // If neighbor is in stack, it's part of the current SCC
        lowLink.set(node, Math.min(lowLink.get(node)!, indices.get(neighbor)!));
      }
    }

    // If node is a root node, pop the stack and generate an SCC
    if (lowLink.get(node) === indices.get(node)) {
      const scc: number[] = [];
      let w: number;
      do {
        w = stack.pop()!;
        onStack.delete(w);
        scc.push(w);
      } while (w !== node);
      sccs.push(scc);
    }
  }

  // Call strongConnect for each node if not visited yet
  for (const node of graph.keys()) {
    if (!indices.has(node)) {
      strongConnect(node);
    }
  }

  return sccs;
}
const graph = new Map<number, number[]>([
  [1, [2]],
  [2, [3, 4]],
  [3, [1]],
  [4, [5]],
  [5, [6]],
  [6, [4, 7]],
  [7, []]
]);

const sccs = tarjanSCC(graph);
console.log(sccs);
[ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 7 ] ]
