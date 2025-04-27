interface Graph {
  adjList: Map<number, number[]>;
}

// Function to find SCCs with Tarjan's algorithm
function tarjanSCC(graph: Graph): number[][] {
  const indexMap = new Map<number, number>();  // Map node to its index
  const lowLinkMap = new Map<number, number>(); // Node's lowLink value
  const onStack = new Set<number>();
  const stack: number[] = [];
  let index = 0;
  const sccs: number[][] = [];

  function strongConnect(node: number) {
    // Set the depth index for node
    indexMap.set(node, index);
    lowLinkMap.set(node, index);
    index++;

    stack.push(node);
    onStack.add(node);

    // Consider successors of node
    const neighbors = graph.adjList.get(node) || [];
    for (const neighbor of neighbors) {
      if (!indexMap.has(neighbor)) {
        // Successor has not yet been visited; recurse on it
        strongConnect(neighbor);
        // Update lowLink on callback
        lowLinkMap.set(node, Math.min(lowLinkMap.get(node)!, lowLinkMap.get(neighbor)!));
      } else if (onStack.has(neighbor)) {
        // Successor is in stack and hence in the current SCC
        lowLinkMap.set(node, Math.min(lowLinkMap.get(node)!, indexMap.get(neighbor)!));
      }
    }

    // If node is root, pop the stack and generate an SCC
    if (lowLinkMap.get(node) === indexMap.get(node)) {
      const scc: number[] = [];
      let v: number;
      do {
        v = stack.pop()!;
        onStack.delete(v);
        scc.push(v);
      } while (v !== node);
      sccs.push(scc);
    }
  }

  // Run strongConnect on each node
  for (const node of graph.adjList.keys()) {
    if (!indexMap.has(node)) {
      strongConnect(node);
    }
  }

  return sccs;
}
const myGraph: Graph = {
  adjList: new Map([
    [1, [2]],
    [2, [3]],
    [3, [1, 4]],
    [4, [5]],
    [5, [6]],
    [6, [4]],
  ])
};

const components = tarjanSCC(myGraph);
console.log(components); // Strongly connected components
