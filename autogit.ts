class TarjanSCC {
  private graph: number[][];
  private index: number;
  private stack: number[];
  private indices: number[];
  private lowlink: number[];
  private onStack: boolean[];
  private sccs: number[][];

  constructor(graph: number[][]) {
    this.graph = graph; // adjacency list representation
    this.index = 0;
    this.stack = [];
    this.indices = new Array(graph.length).fill(-1);
    this.lowlink = new Array(graph.length).fill(0);
    this.onStack = new Array(graph.length).fill(false);
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
    this.lowlink[v] = this.index;
    this.index++;
    this.stack.push(v);
    this.onStack[v] = true;

    // Consider successors of v
    for (const w of this.graph[v]) {
      if (this.indices[w] === -1) {
        // Successor w has not yet been visited; recurse on it
        this.strongConnect(w);
        this.lowlink[v] = Math.min(this.lowlink[v], this.lowlink[w]);
      } else if (this.onStack[w]) {
        // Successor w is in stack => update lowlink[v]
        this.lowlink[v] = Math.min(this.lowlink[v], this.indices[w]);
      }
    }

    // If v is a root node, pop the stack and generate an SCC
    if (this.lowlink[v] === this.indices[v]) {
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
// Example graph:
// 0 -> 1
// 1 -> 2
// 2 -> 0, 3
// 3 -> 4
// 4 -> (none)

const graph = [
  [1],    // 0
  [2],    // 1
  [0, 3], // 2
  [4],    // 3
  []      // 4
];

const tarjan = new TarjanSCC(graph);
const stronglyConnectedComponents = tarjan.run();

console.log(stronglyConnectedComponents);
// Output: [ [ 0, 2, 1 ], [ 3 ], [ 4 ] ]
