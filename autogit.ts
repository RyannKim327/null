class Graph {
  adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addEdge(from: number, to: number) {
    if (!this.adjacencyList.has(from)) {
      this.adjacencyList.set(from, []);
    }
    this.adjacencyList.get(from)!.push(to);
  }

  tarjanSCC(): number[][] {
    const adjacencyList = this.adjacencyList;
    const stack: number[] = [];
    const onStack: Set<number> = new Set();
    const ids: Map<number, number> = new Map();
    const lowLinks: Map<number, number> = new Map();
    const sccs: number[][] = [];
    let id = 0;

    function dfs(at: number) {
      ids.set(at, id);
      lowLinks.set(at, id);
      id++;
      stack.push(at);
      onStack.add(at);

      const neighbors = adjacencyList.get(at) || [];
      neighbors.forEach(to => {
        if (!ids.has(to)) {
          dfs(to);
          lowLinks.set(at, Math.min(lowLinks.get(at)!, lowLinks.get(to)!));
        } else if (onStack.has(to)) {
          lowLinks.set(at, Math.min(lowLinks.get(at)!, ids.get(to)!));
        }
      });

      // On recursive callback, if we're at root node (start of SCC)
      if (ids.get(at) === lowLinks.get(at)) {
        const scc: number[] = [];
        let node: number;

        do {
          node = stack.pop()!;
          onStack.delete(node);
          scc.push(node);
        } while (node !== at);

        sccs.push(scc);
      }
    }

    // Run DFS from every node that hasn't been visited
    for (const node of adjacencyList.keys()) {
      if (!ids.has(node)) {
        dfs(node);
      }
    }

    return sccs;
  }
}

// Example usage
const graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 1);
graph.addEdge(3, 4);

const sccs = graph.tarjanSCC();
console.log(sccs); 
// Output: [[4], [1, 3, 2]] -- the strongly connected components in the graph
