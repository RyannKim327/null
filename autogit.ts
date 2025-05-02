class TarjanSCC {
  private graph: number[][];
  private index: number;
  private stack: number[];
  private onStack: boolean[];
  private indices: number[];
  private lowLink: number[];
  private sccs: number[][];

  constructor(graph: number[][]) {
    this.graph = graph;
    const n = graph.length;
    this.index = 0;
    this.stack = [];
    this.onStack = new Array(n).fill(false);
    this.indices = new Array(n).fill(-1);
    this.lowLink = new Array(n).fill(-1);
    this.sccs = [];
  }

  private strongConnect(v: number) {
    this.indices[v] = this.index;
    this.lowLink[v] = this.index;
    this.index++;
    this.stack.push(v);
    this.onStack[v] = true;

    // Consider successors of v
    for (const w of this.graph[v]) {
      if (this.indices[w] === -1) {
        // Successor w has not yet been visited; recurse on it
        this.strongConnect(w);
        this.lowLink[v] = Math.min(this.lowLink[v], this.lowLink[w]);
      } else if (this.onStack[w]) {
        // Successor w is in stack and hence in the current SCC
        this.lowLink[v] = Math.min(this.lowLink[v], this.indices[w]);
      }
    }

    // If v is a root node, pop the stack and generate an SCC
    if (this.lowLink[v] === this.indices[v]) {
      const scc: number[] = [];
      let w: number;
      do {
        w = this.stack.pop()!;
        this.onStack[w] = false;
        scc.push(w);
      } while (w !== v);
      this.sccs.push(scc);
    }
  }

  public run(): number[][] {
    for (let i = 0; i < this.graph.length; i++) {
      if (this.indices[i] === -1) {
        this.strongConnect(i);
      }
    }
    return this.sccs;
  }
}
