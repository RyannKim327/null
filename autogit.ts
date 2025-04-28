type Graph = {
  [node: string]: string[];
};

function tarjan(graph: Graph): string[][] {
  let index = 0; // To assign each node an index
  const stack: string[] = [];
  const onStack: { [node: string]: boolean } = {}; // Track if a node is on the stack
  const indices: { [node: string]: number } = {}; // To store node's index
  const lowLinks: { [node: string]: number } = {}; // To track the lowest index reachable
  const sccs: string[][] = [];

  function strongConnect(node: string) {
    // Set the depth index for node
    indices[node] = index;
    lowLinks[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    // Consider successors
    for (const neighbor of graph[node] || []) {
      if (indices[neighbor] === undefined) {
        // Successor has not yet been visited; recurse on it
        strongConnect(neighbor);
        lowLinks[node] = Math.min(lowLinks[node], lowLinks[neighbor]);
      } else if (onStack[neighbor]) {
        // Successor is in the current SCC
        lowLinks[node] = Math.min(lowLinks[node], indices[neighbor]);
      }
    }

    // If node is a root node, pop the stack and generate an SCC
    if (lowLinks[node] === indices[node]) {
      const scc: string[] = [];
      let w: string;
      do {
        w = stack.pop()!;
        onStack[w] = false;
        scc.push(w);
      } while (w !== node);
      sccs.push(scc);
    }
  }

  for (const node in graph) {
    if (indices[node] === undefined) {
      strongConnect(node);
    }
  }

  return sccs;
}
const graph: Graph = {
  'A': ['B'],
  'B': ['C', 'E'],
  'C': ['D', 'F'],
  'D': ['C', 'G'],
  'E': ['A', 'F'],
  'F': ['G'],
  'G': ['F', 'H'],
  'H': ['I', 'J'],
  'I': ['J', 'K'],
  'J': ['I'],
  'K': [],
};

const sccs = tarjan(graph);
console.log(sccs);
