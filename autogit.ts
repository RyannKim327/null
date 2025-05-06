type Graph = Map<number, number[]>;

class TarjanSCC {
  private index: number = 0;
  private stack: number[] = [];
  private onStack: Set<number> = new Set();
  private indexes: Map<number, number> = new Map();
  private lowlinks: Map<number, number> = new Map();
  private sccs: number[][] = [];

  constructor(private graph: Graph) {}

  public run(): number[][] {
    for (const node of this.graph.keys()) {
      if (!this.indexes.has(node)) {
        this.strongConnect(node);
      }
    }
    return this.sccs;
  }

  private strongConnect(node: number) {
    this.indexes.set(node, this.index);
    this.lowlinks.set(node, this.index);
    this.index += 1;
    this.stack.push(node);
    this.onStack.add(node);

    const neighbors = this.graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!this.indexes.has(neighbor)) {
        // neighbor has not yet been visited; recurse on it
        this.strongConnect(neighbor);
        this.lowlinks.set(
          node,
          Math.min(this.lowlinks.get(node)!, this.lowlinks.get(neighbor)!)
        );
      } else if (this.onStack.has(neighbor)) {
        // neighbor is in stack and hence in the current SCC
        this.lowlinks.set(
          node,
          Math.min(this.lowlinks.get(node)!, this.indexes.get(neighbor)!)
        );
      }
    }

    // If node is a root node, pop the stack and generate an SCC
    if (this.lowlinks.get(node) === this.indexes.get(node)) {
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
