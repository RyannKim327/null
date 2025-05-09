class TarjanSCC {
  private graph: Map<number, number[]>; // adjacency list representation
  private index: number; // timer for dfs visitation time
  private stack: number[];
  private onStack: Set<number>;
  private indices: Map<number, number>;
  private lowLink: Map<number, number>;
  private sccs: number[][];

  constructor(graph: Map<number, number[]>) {
    this.graph = graph;
    this.index = 0;
    this.stack = [];
    this.onStack = new Set();
    this.indices = new Map();
    this.lowLink = new Map();
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

    const neighbors = this.graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!this.indices.has(neighbor)) {
        // Neighbor has not been visited; recurse on it
        this.strongConnect(neighbor);
        this.lowLink.set(
          node,
          Math.min(this.lowLink.get(node)!, this.lowLink.get(neighbor)!)
        );
      } else if (this.onStack.has(neighbor)) {
        // Neighbor is in stack and hence in the current SCC
        this.lowLink.set(
          node,
          Math.min(this.lowLink.get(node)!, this.indices.get(neighbor)!)
        );
      }
    }

    // If node is a root node, pop the stack and generate SCC
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

// Example usage:

// Suppose we have a graph:
// 1 → 2
// 2 → 3
// 3 → 1, 4
// 4 → 5
// 5 → 4

const graph = new Map<number, number[]>([
  [1, [2]],
  [2, [3]],
  [3, [1, 4]],
  [4, [5]],
  [5, [4]],
]);

const tarjan = new TarjanSCC(graph);
const stronglyConnectedComponents = tarjan.run();

console.log(stronglyConnectedComponents);
// Output might be:
// [ [ 5, 4 ], [ 1, 3, 2 ] ]
// SCCs grouped in arrays, order of groups or elements may vary
