type Graph = Map<number, number[]>;

function tarjanSCC(graph: Graph): number[][] {
  let index = 0;
  const stack: number[] = [];
  const indices = new Map<number, number>();
  const lowLink = new Map<number, number>();
  const onStack = new Set<number>();
  const sccs: number[][] = [];

  function strongConnect(node: number) {
    indices.set(node, index);
    lowLink.set(node, index);
    index++;
    stack.push(node);
    onStack.add(node);

    for (const neighbor of graph.get(node) || []) {
      if (!indices.has(neighbor)) {
        // Node not visited, recurse
        strongConnect(neighbor);
        lowLink.set(node, Math.min(lowLink.get(node)!, lowLink.get(neighbor)!));
      } else if (onStack.has(neighbor)) {
        // Neighbor is in the current stack: update lowLink
        lowLink.set(node, Math.min(lowLink.get(node)!, indices.get(neighbor)!));
      }
    }

    // If node is root of SCC
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

  for (const node of graph.keys()) {
    if (!indices.has(node)) {
      strongConnect(node);
    }
  }

  return sccs;
}
const graph: Graph = new Map();
graph.set(0, [1]);
graph.set(1, [2]);
graph.set(2, [0, 3]);
graph.set(3, [4]);
graph.set(4, [5, 7]);
graph.set(5, [6]);
graph.set(6, [4]);
graph.set(7, []);

const components = tarjanSCC(graph);
console.log(components);
[ [ 3 ], [ 0, 2, 1 ], [ 4, 6, 5 ], [ 7 ] ]
