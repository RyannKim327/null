class TarjanSCC {
  private graph: number[][];
  private index: number;
  private stack: number[];
  private onStack: boolean[];
  private indexes: number[];
  private lowLinks: number[];
  private sccs: number[][];

  constructor(graph: number[][]) {
    this.graph = graph;
    const n = graph.length;
    this.index = 0;
    this.stack = [];
    this.onStack = new Array(n).fill(false);
    this.indexes = new Array(n).fill(-1);
    this.lowLinks = new Array(n).fill(-1);
    this.sccs = [];
  }

  public getSCCs(): number[][] {
    for (let v = 0; v < this.graph.length; v++) {
      if (this.indexes[v] === -1) {
        this.strongConnect(v);
      }
    }
    return this.sccs;
  }

  private strongConnect(v: number): void {
    this.indexes[v] = this.index;
    this.lowLinks[v] = this.index;
    this.index++;
    this.stack.push(v);
    this.onStack[v] = true;

    for (const w of this.graph[v]) {
      if (this.indexes[w] === -1) {
        this.strongConnect(w);
        this.lowLinks[v] = Math.min(this.lowLinks[v], this.lowLinks[w]);
      } else if (this.onStack[w]) {
        this.lowLinks[v] = Math.min(this.lowLinks[v], this.indexes[w]);
      }
    }

    // If v is a root node, pop the stack and generate an SCC
    if (this.lowLinks[v] === this.indexes[v]) {
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
}
// Graph represented as adjacency list
// Index represents the node, array at index are its neighbors
const graph = [
  [1],    // 0 -> 1
  [2],    // 1 -> 2
  [0, 3], // 2 -> 0, 3
  [4],    // 3 -> 4
  [],     // 4
];

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.getSCCs();
console.log(sccs);
// Output may be something like: [[4], [3], [0, 2, 1]]
