class Graph {
  private adjList: Map<number, number[]>; // Adjacency list representation of the graph
  private index: number; // Global counter for discovery time
  private indices: Map<number, number>; // Stores the discovery time of each node
  private lowLinks: Map<number, number>; // Stores the low-link value of each node
  private onStack: Set<number>; // Tracks nodes currently on the stack
  private stack: number[]; // Stack for DFS traversal
  private sccs: number[][]; // List of strongly connected components

  constructor() {
    this.adjList = new Map();
    this.index = 0;
    this.indices = new Map();
    this.lowLinks = new Map();
    this.onStack = new Set();
    this.stack = [];
    this.sccs = [];
  }

  // Add an edge to the graph
  addEdge(from: number, to: number): void {
    if (!this.adjList.has(from)) {
      this.adjList.set(from, []);
    }
    this.adjList.get(from)?.push(to);
  }

  // Tarjan's algorithm to find SCCs
  findSCCs(): number[][] {
    this.adjList.forEach((_, node) => {
      if (!this.indices.has(node)) {
        this.tarjanDFS(node);
      }
    });
    return this.sccs;
  }

  private tarjanDFS(node: number): void {
    // Initialize discovery time and low-link value
    this.indices.set(node, this.index);
    this.lowLinks.set(node, this.index);
    this.index++;
    this.stack.push(node);
    this.onStack.add(node);

    // Traverse all neighbors
    const neighbors = this.adjList.get(node) || [];
    for (const neighbor of neighbors) {
      if (!this.indices.has(neighbor)) {
        // Neighbor has not been visited yet
        this.tarjanDFS(neighbor);
        // Update low-link value after recursion
        this.lowLinks.set(
          node,
          Math.min(this.lowLinks.get(node)!, this.lowLinks.get(neighbor)!)
        );
      } else if (this.onStack.has(neighbor)) {
        // Neighbor is on the stack, update low-link value
        this.lowLinks.set(
          node,
          Math.min(this.lowLinks.get(node)!, this.indices.get(neighbor)!)
        );
      }
    }

    // If the node is the root of an SCC, extract the component
    if (this.lowLinks.get(node) === this.indices.get(node)) {
      const scc: number[] = [];
      let topNode: number;
      do {
        topNode = this.stack.pop()!;
        this.onStack.delete(topNode);
        scc.push(topNode);
      } while (topNode !== node);
      this.sccs.push(scc);
    }
  }
}

// Example usage
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 1);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
graph.addEdge(6, 4);
graph.addEdge(7, 6);
graph.addEdge(7, 8);

const sccs = graph.findSCCs();
console.log("Strongly Connected Components:", sccs);
1 -> 2 -> 3 -> 1
4 -> 5 -> 6 -> 4
7 -> 6, 7 -> 8
Strongly Connected Components: [[3, 2, 1], [6, 5, 4], [8], [7]]
