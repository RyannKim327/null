class TarjanSCC {
  private graph: Map<number, number[]>;
  private index: number;
  private stack: number[];
  private indices: Map<number, number>;
  private lowlink: Map<number, number>;
  private onStack: Set<number>;
  private sccs: number[][];

  constructor(graph: Map<number, number[]>) {
    this.graph = graph;
    this.index = 0;
    this.stack = [];
    this.indices = new Map();
    this.lowlink = new Map();
    this.onStack = new Set();
    this.sccs = [];
  }

  public findSCCs(): number[][] {
    for (const node of this.graph.keys()) {
      if (!this.indices.has(node)) {
        this.strongConnect(node);
      }
    }
    return this.sccs;
  }

  private strongConnect(v: number): void {
    this.indices.set(v, this.index);
    this.lowlink.set(v, this.index);
    this.index++;
    this.stack.push(v);
    this.onStack.add(v);

    for (const w of this.graph.get(v) || []) {
      if (!this.indices.has(w)) {
        // Successor w has not yet been visited; recurse on it
        this.strongConnect(w);
        this.lowlink.set(v, Math.min(this.lowlink.get(v)!, this.lowlink.get(w)!));
      } else if (this.onStack.has(w)) {
        // Successor w is in stack and hence in the current SCC
        this.lowlink.set(v, Math.min(this.lowlink.get(v)!, this.indices.get(w)!));
      }
    }

    // If v is a root node, pop the stack and generate an SCC
    if (this.lowlink.get(v) === this.indices.get(v)) {
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
// Graph representation as adjacency list
const graph = new Map<number, number[]>();
graph.set(0, [1]);
graph.set(1, [2]);
graph.set(2, [0, 3]);
graph.set(3, [4]);
graph.set(4, []);

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.findSCCs();

console.log(sccs);
// Output might be: [ [ 4 ], [ 3 ], [ 0, 2, 1 ] ]
