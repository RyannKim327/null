type Graph = Map<number, number[]>;

class TarjanSCC {
  private graph: Graph;
  private index: number;               // To assign unique ids to each node during DFS
  private stack: number[];             // Stack to keep track of the traversal path
  private onStack: Set<number>;        // To check if a node is currently in the stack
  private indices: Map<number, number>;// Stores the index of each node
  private lowLink: Map<number, number>;// Stores the smallest index reachable from the node
  private sccs: number[][];            // Strongly connected components found

  constructor(graph: Graph) {
    this.graph = graph;
    this.index = 0;
    this.stack = [];
    this.onStack = new Set();
    this.indices = new Map();
    this.lowLink = new Map();
    this.sccs = [];
  }

  public run(): number[][] {
    for (const node of this.graph.keys()) {
      if (!this.indices.has(node)) {
        this.strongConnect(node);
      }
    }
    return this.sccs;
  }

  private strongConnect(node: number) {
    // Set the depth index for node to the smallest unused index
    this.indices.set(node, this.index);
    this.lowLink.set(node, this.index);
    this.index++;
    this.stack.push(node);
    this.onStack.add(node);

    // Consider successors of node
    const neighbors = this.graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!this.indices.has(neighbor)) {
        // Successor has not yet been visited; recurse on it
        this.strongConnect(neighbor);
        this.lowLink.set(
          node,
          Math.min(this.lowLink.get(node)!, this.lowLink.get(neighbor)!)
        );
      } else if (this.onStack.has(neighbor)) {
        // Successor is in stack and hence in the current SCC
        this.lowLink.set(
          node,
          Math.min(this.lowLink.get(node)!, this.indices.get(neighbor)!)
        );
      }
    }

    // If node is a root node, pop the stack and generate an SCC
    if (this.lowLink.get(node) === this.indices.get(node)) {
      const scc: number[] = [];
      let w: number;
      do {
        w = this.stack.pop()!;
        this.onStack.delete(w);
        scc.push(w);
      } while (w !== node);
      this.sccs.push(scc);
    }
  }
}
const graph: Graph = new Map([
  [1, [2]],
  [2, [3, 4]],
  [3, [1]],
  [4, [5]],
  [5, []],
]);

const tarjan = new TarjanSCC(graph);
const stronglyConnectedComponents = tarjan.run();
console.log(stronglyConnectedComponents);
