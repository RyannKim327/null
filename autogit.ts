type Graph = Map<number, number[]>;

function tarjanSCC(graph: Graph): number[][] {
  const indexMap: Map<number, number> = new Map(); // node -> index
  const lowLinkMap: Map<number, number> = new Map();
  const onStack: Set<number> = new Set();
  const stack: number[] = [];
  const sccs: number[][] = [];
  let index = 0;

  function strongConnect(node: number) {
    indexMap.set(node, index);
    lowLinkMap.set(node, index);
    index++;
    stack.push(node);
    onStack.add(node);

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!indexMap.has(neighbor)) {
        // Successor has not yet been visited; recurse on it
        strongConnect(neighbor);
        lowLinkMap.set(
          node,
          Math.min(lowLinkMap.get(node)!, lowLinkMap.get(neighbor)!)
        );
      } else if (onStack.has(neighbor)) {
        // Successor is in the current SCC
        lowLinkMap.set(
          node,
          Math.min(lowLinkMap.get(node)!, indexMap.get(neighbor)!)
        );
      }
    }

    // If node is a root node, pop the stack and generate an SCC
    if (lowLinkMap.get(node) === indexMap.get(node)) {
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

  // Run the algorithm for each node
  for (const node of graph.keys()) {
    if (!indexMap.has(node)) {
      strongConnect(node);
    }
  }

  return sccs;
}
const graph: Graph = new Map([
  [1, [2]],
  [2, [3]],
  [3, [1, 4]],
  [4, [5]],
  [5, [6]],
  [6, [4]],
]);

const components = tarjanSCC(graph);
console.log(components);
[ [ 3, 2, 1 ], [ 6, 5, 4 ] ]
