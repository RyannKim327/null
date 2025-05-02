class TarjanSCC {
  private graph: Map<number, number[]>;  // adjacency list
  private index: number = 0;              // index counter
  private indices: Map<number, number>;  // node -> index
  private lowLinks: Map<number, number>; // node -> low-link
  private stack: number[] = [];
  private onStack: Set<number> = new Set();
  private sccs: number[][] = [];

  constructor(graph: Map<number, number[]>) {
    this.graph = graph;
    this.indices = new Map();
    this.lowLinks = new Map();
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
    this.lowLinks.set(node, this.index);
    this.index++;
    this.stack.push(node);
    this.onStack.add(node);

    // Process all neighbors
    const neighbors = this.graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!this.indices.has(neighbor)) {
        // Neighbor not visited; recurse
        this.strongConnect(neighbor);
        this.lowLinks.set(node, Math.min(this.lowLinks.get(node)!, this.lowLinks.get(neighbor)!));
      } else if (this.onStack.has(neighbor)) {
        // Neighbor in stack, update low-link
        this.lowLinks.set(node, Math.min(this.lowLinks.get(node)!, this.indices.get(neighbor)!));
      }
    }

    // If node is a root node, pop stack and generate an SCC
    if (this.lowLinks.get(node) === this.indices.get(node)) {
      const scc: number[] = [];
      let w: number | undefined;
      do {
        w = this.stack.pop();
        if (w !== undefined) {
          this.onStack.delete(w);
          scc.push(w);
        }
      } while (w !== node && w !== undefined);
      this.sccs.push(scc);
    }
  }
}
const graph = new Map<number, number[]>([
  [1, [2]],
  [2, [3, 4]],
  [3, [1]],
  [4, [5]],
  [5, [4]],
]);

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.run();

console.log(sccs);
// Example output (order may vary): [[3,2,1], [5,4]]
