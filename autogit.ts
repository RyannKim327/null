class TarjanSCC {
  private graph: Map<number, number[]>; // Adjacency list representation
  private index: number;
  private indices: Map<number, number>;
  private lowLink: Map<number, number>;
  private stack: number[];
  private onStack: Set<number>;
  private sccs: number[][];

  constructor(graph: Map<number, number[]>) {
    this.graph = graph;
    this.index = 0;
    this.indices = new Map();
    this.lowLink = new Map();
    this.stack = [];
    this.onStack = new Set();
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

  private strongConnect(v: number) {
    // Set the depth index for v to the smallest unused index
    this.indices.set(v, this.index);
    this.lowLink.set(v, this.index);
    this.index++;
    this.stack.push(v);
    this.onStack.add(v);

    const neighbors = this.graph.get(v) || [];
    for (const w of neighbors) {
      if (!this.indices.has(w)) {
        // Successor w has not yet been visited; recurse on it
        this.strongConnect(w);
        this.lowLink.set(v, Math.min(this.lowLink.get(v)!, this.lowLink.get(w)!));
      } else if (this.onStack.has(w)) {
        // Successor w is in stack and hence in the current SCC
        this.lowLink.set(v, Math.min(this.lowLink.get(v)!, this.indices.get(w)!));
      }
    }

    // If v is a root node, pop the stack and generate an SCC
    if (this.lowLink.get(v) === this.indices.get(v)) {
      const scc: number[] = [];
      let w: number;
      do {
        w = this.stack.pop()!;
        this.onStack.delete(w);
        scc.push(w);
      } while (w !== v);
      this.sccs.push(scc);
    }
  }
}

// Example usage:
const graph = new Map<number, number[]>([
  [1, [2]],
  [2, [3]],
  [3, [1, 4]],
  [4, [5]],
  [5, [6]],
  [6, [4, 7]],
  [7, []],
]);

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.run();

console.log("Strongly Connected Components:", sccs);
