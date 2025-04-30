class TarjanSCC {
  private graph: Map<number, number[]>; // adjacency list
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

  private strongConnect(node: number) {
    this.indices.set(node, this.index);
    this.lowLink.set(node, this.index);
    this.index++;
    this.stack.push(node);
    this.onStack.add(node);

    for (const neighbor of this.graph.get(node) || []) {
      if (!this.indices.has(neighbor)) {
        this.strongConnect(neighbor);
        this.lowLink.set(
          node,
          Math.min(this.lowLink.get(node)!, this.lowLink.get(neighbor)!)
        );
      } else if (this.onStack.has(neighbor)) {
        this.lowLink.set(
          node,
          Math.min(this.lowLink.get(node)!, this.indices.get(neighbor)!)
        );
      }
    }

    // If node is root of SCC
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
const graph = new Map<number, number[]>([
  [1, [2]],
  [2, [3, 4]],
  [3, [1]],
  [4, [5]],
  [5, [6]],
  [6, [4]],
]);

const tarjan = new TarjanSCC(graph);
const stronglyConnectedComponents = tarjan.run();
console.log(stronglyConnectedComponents);
[ [ 3, 2, 1 ], [ 6, 5, 4 ] ]
