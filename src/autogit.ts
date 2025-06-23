class TarjanSCC {
  private graph: Map<number, number[]> = new Map();
  private index = 0;
  private stack: number[] = [];
  private onStack: Set<number> = new Set();
  private indices: Map<number, number> = new Map();
  private lowLinks: Map<number, number> = new Map();
  private sccs: number[][] = [];

  constructor(edges: [number, number][]) {
    // Build the graph from edges
    for (const [u, v] of edges) {
      if (!this.graph.has(u)) this.graph.set(u, []);
      this.graph.get(u)!.push(v);
    }
  }

  public findSCCs(): number[][] {
    // Initialize and run Tarjan's algorithm for all nodes
    for (const node of this.graph.keys()) {
      if (!this.indices.has(node)) {
        this.tarjanDFS(node);
      }
    }
    return this.sccs;
  }

  private tarjanDFS(node: number): void {
    // Set the discovery time and low-link value for the current node
    this.indices.set(node, this.index);
    this.lowLinks.set(node, this.index);
    this.index++;

    // Push the node onto the stack
    this.stack.push(node);
    this.onStack.add(node);

    // Explore neighbors
    const neighbors = this.graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!this.indices.has(neighbor)) {
        // Neighbor is unvisited
        this.tarjanDFS(neighbor);
        // Update low-link value after recursion
        this.lowLinks.set(
          node,
          Math.min(this.lowLinks.get(node)!, this.lowLinks.get(neighbor)!)
        );
      } else if (this.onStack.has(neighbor)) {
        // Neighbor is on the stack (in the current DFS path)
        this.lowLinks.set(
          node,
          Math.min(this.lowLinks.get(node)!, this.indices.get(neighbor)!)
        );
      }
    }

    // If the node is the root of an SCC, extract the SCC
    if (this.lowLinks.get(node) === this.indices.get(node)) {
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

// Example Usage
const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 0],
  [1, 3],
  [3, 4],
];

const tarjan = new TarjanSCC(edges);
const sccs = tarjan.findSCCs();
console.log("Strongly Connected Components:", sccs);
[
  [0, 1],
  [1, 2],
  [2, 0],
  [1, 3],
  [3, 4],
]
Strongly Connected Components: [[4], [3], [0, 2, 1]]
