class TarjanSCC {
  private graph: number[][];
  private index: number;
  private stack: number[];
  private indices: number[];
  private lowLinks: number[];
  private onStack: boolean[];
  private sccs: number[][];

  constructor(graph: number[][]) {
    this.graph = graph;
    const n = graph.length;
    this.index = 0;
    this.stack = [];
    this.indices = new Array(n).fill(-1);
    this.lowLinks = new Array(n).fill(-1);
    this.onStack = new Array(n).fill(false);
    this.sccs = [];
  }

  public run(): number[][] {
    for (let v = 0; v < this.graph.length; v++) {
      if (this.indices[v] === -1) {
        this.strongConnect(v);
      }
    }
    return this.sccs;
  }

  private strongConnect(v: number): void {
    this.indices[v] = this.index;
    this.lowLinks[v] = this.index;
    this.index++;
    this.stack.push(v);
    this.onStack[v] = true;

    for (const w of this.graph[v]) {
      if (this.indices[w] === -1) {
        this.strongConnect(w);
        this.lowLinks[v] = Math.min(this.lowLinks[v], this.lowLinks[w]);
      } else if (this.onStack[w]) {
        this.lowLinks[v] = Math.min(this.lowLinks[v], this.indices[w]);
      }
    }

    if (this.lowLinks[v] === this.indices[v]) {
      const scc: number[] = [];
      let w;
      do {
        w = this.stack.pop()!;
        this.onStack[w] = false;
        scc.push(w);
      } while (w !== v);
      this.sccs.push(scc);
    }
  }
}

// Example usage:
const graph = [
  [1],
  [2, 4, 5],
  [3, 6],
  [2, 7],
  [0, 5],
  [6],
  [5],
  [3, 6],
];

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.run();
console.log(sccs);
// Output might be something like: [ [ 6, 5 ], [ 7, 3, 2 ], [ 1, 4, 0 ] ]
