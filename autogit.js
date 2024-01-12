class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addEdge(u, v) {
    if (!this.adjList.has(u)) {
      this.adjList.set(u, []);
    }
    this.adjList.get(u).push(v);
  }

  // Helper function to perform depth-first search (DFS)
  dfs(u, discoveryTime, lowLink, stack, onStack, result) {
    // Initialize discovery time and low link value
    discoveryTime[u] = lowLink[u] = this.time++;
    stack.push(u);
    onStack[u] = true;

    // Go through each adjacent vertex of u
    const adjVertices = this.adjList.get(u);
    for (let v of adjVertices) {
      if (discoveryTime[v] === -1) {
        this.dfs(v, discoveryTime, lowLink, stack, onStack, result);
        lowLink[u] = Math.min(lowLink[u], lowLink[v]);
      } else if (onStack[v]) {
        lowLink[u] = Math.min(lowLink[u], discoveryTime[v]);
      }
    }

    // If u is a root node, then pop the stack and generate a new SCC
    if (discoveryTime[u] === lowLink[u]) {
      const scc = [];
      let curr;
      do {
        curr = stack.pop();
        onStack[curr] = false;
        scc.push(curr);
      } while (curr !== u);
      result.push(scc);
    }
  }

  // Tarjan's algorithm to find strongly connected components
  tarjanSCC() {
    const discoveryTime = new Array(this.vertices).fill(-1);
    const lowLink = new Array(this.vertices);
    const stack = [];
    const onStack = new Array(this.vertices).fill(false);
    const result = [];
    this.time = 0;

    for (let i = 0; i < this.vertices; i++) {
      if (discoveryTime[i] === -1) {
        this.dfs(i, discoveryTime, lowLink, stack, onStack, result);
      }
    }

    return result;
  }
}
const g = new Graph(7); // Initialize a graph with 7 vertices
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(1, 6);
g.addEdge(3, 5);
g.addEdge(4, 5);
const scc = g.tarjanSCC();
console.log(scc);
