class TarjanSCC {
  private index: number = 0;
  private stack: number[] = [];
  private onStack: boolean[];
  private indices: number[];
  private lowLinks: number[];
  private sccs: number[][] = [];

  constructor(private graph: number[][]) {
    const n = graph.length;
    this.onStack = new Array(n).fill(false);
    this.indices = new Array(n).fill(-1);
    this.lowLinks = new Array(n).fill(-1);
  }

  public findSCCs(): number[][] {
    for (let v = 0; v < this.graph.length; v++) {
      if (this.indices[v] === -1) {
        this.strongConnect(v);
      }
    }
    return this.sccs;
  }

  private strongConnect(v: number): void {
    // Set the depth index for v to the smallest unused index
    this.indices[v] = this.index;
    this.lowLinks[v] = this.index;
    this.index++;
    this.stack.push(v);
    this.onStack[v] = true;

    // Consider successors of v
    for (const w of this.graph[v]) {
      if (this.indices[w] === -1) {
        // Successor w has not yet been visited; recurse on it
        this.strongConnect(w);
        this.lowLinks[v] = Math.min(this.lowLinks[v], this.lowLinks[w]);
      } else if (this.onStack[w]) {
        // Successor w is in stack and hence in the current SCC
        this.lowLinks[v] = Math.min(this.lowLinks[v], this.indices[w]);
      }
    }

    // If v is a root node, pop the stack and generate an SCC
    if (this.lowLinks[v] === this.indices[v]) {
      const scc: number[] = [];
      let w: number;

      do {
        w = this.stack.pop()!;
        this.onStack[w] = false;
        scc.push(w);
      } while (w !== v);

      // Add the found SCC to the list
      this.sccs.push(scc);
    }
  }
}

// Example usage
const graph = [
  [1],
  [2],
  [0],
  [1, 4],
  [5],
  [4]
];

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.findSCCs();
console.log(sccs); // Output the strongly connected components
