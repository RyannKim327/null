class TarjanSCC {
  private graph: Map<number, number[]>;  // adjacency list
  private index: number;
  private stack: number[];
  private onStack: Set<number>;
  private indices: Map<number, number>;
  private lowlink: Map<number, number>;
  private stronglyConnectedComponents: number[][];
  
  constructor(graph: Map<number, number[]>) {
    this.graph = graph;
    this.index = 0;
    this.stack = [];
    this.onStack = new Set();
    this.indices = new Map();
    this.lowlink = new Map();
    this.stronglyConnectedComponents = [];
  }
  
  public run(): number[][] {
    // For each node, if it hasn't been visited, start DFS
    for (const node of this.graph.keys()) {
      if (!this.indices.has(node)) {
        this.strongConnect(node);
      }
    }
    return this.stronglyConnectedComponents;
  }
  
  private strongConnect(v: number): void {
    // Set the depth index for v to the smallest unused index
    this.indices.set(v, this.index);
    this.lowlink.set(v, this.index);
    this.index++;
    this.stack.push(v);
    this.onStack.add(v);
    
    // Consider successors of v
    const neighbors = this.graph.get(v) || [];
    for (const w of neighbors) {
      if (!this.indices.has(w)) {
        // Successor w has not yet been visited; recurse on it
        this.strongConnect(w);
        this.lowlink.set(
          v,
          Math.min(this.lowlink.get(v)!, this.lowlink.get(w)!)
        );
      } else if (this.onStack.has(w)) {
        // Successor w is in stack and hence in the current SCC
        this.lowlink.set(
          v,
          Math.min(this.lowlink.get(v)!, this.indices.get(w)!)
        );
      }
    }
    
    // If v is root node, pop the stack and generate an SCC
    if (this.lowlink.get(v) === this.indices.get(v)) {
      const scc: number[] = [];
      let w: number;
      do {
        w = this.stack.pop()!;
        this.onStack.delete(w);
        scc.push(w);
      } while (w !== v);
      this.stronglyConnectedComponents.push(scc);
    }
  }
}
// Define graph as adjacency list:
const graph = new Map<number, number[]>();
graph.set(0, [1]);
graph.set(1, [2, 4, 5]);
graph.set(2, [3, 6]);
graph.set(3, [2, 7]);
graph.set(4, [0, 5]);
graph.set(5, [6]);
graph.set(6, [5]);
graph.set(7, [3, 6]);

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.run();
console.log("Strongly Connected Components:", sccs);
