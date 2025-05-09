type Graph = Map<number, number[]>;

class TarjanSCC {
  private graph: Graph;
  private index: number;
  private stack: number[];
  private onStack: Set<number>;
  private indices: Map<number, number>;
  private lowLink: Map<number, number>;
  private sccs: number[][];

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
    // Set the discovery index and low link value to the current index
    this.indices.set(node, this.index);
    this.lowLink.set(node, this.index);
    this.index++;
    this.stack.push(node);
    this.onStack.add(node);

    // Consider successors of 'node'
    for (const neighbor of this.graph.get(node) || []) {
      if (!this.indices.has(neighbor)) {
        // Neighbor has not yet been visited; recurse on it
        this.strongConnect(neighbor);
        this.lowLink.set(node, Math.min(this.lowLink.get(node)!, this.lowLink.get(neighbor)!));
      } else if (this.onStack.has(neighbor)) {
        // Neighbor is in stack -> update low link value
        this.lowLink.set(node, Math.min(this.lowLink.get(node)!, this.indices.get(neighbor)!));
      }
    }

    // If node is a root node, pop the stack and generate an SCC
    if (this.lowLink.get(node) === this.indices.get(node)) {
      const scc: number[] = [];
      let w: number | undefined;
      do {
        w = this.stack.pop();
        if (w !== undefined) {
          this.onStack.delete(w);
          scc.push(w);
        }
      } while (w !== node);
      this.sccs.push(scc);
    }
  }
}

// Example usage:
const graph: Graph = new Map([
  [1, [2]],
  [2, [3]],
  [3, [1, 4]],
  [4, [5]],
  [5, [6, 7]],
  [6, [4, 8]],
  [7, [8]],
  [8, []],
]);

const tarjan = new TarjanSCC(graph);
const stronglyConnectedComponents = tarjan.run();
console.log(stronglyConnectedComponents);
