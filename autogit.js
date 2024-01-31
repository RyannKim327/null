class TarjanSCC {
  constructor(adjList) {
    this.adjList = adjList; // adjacency list of the graph
    this.index = 0; // index counter
    this.stack = []; // stack for storing visited vertices
    this.lowlink = []; // lowlink values of vertices
    this.onStack = []; // whether a vertex is on the stack
    this.scc = []; // strongly connected components
  }

  findSCC() {
    // Initialize arrays
    const numVertices = this.adjList.length;
    this.index = 0;
    this.stack = [];
    this.lowlink = new Array(numVertices).fill(-1);
    this.onStack = new Array(numVertices).fill(false);
    this.scc = [];

    // Traverse each vertex
    for (let v = 0; v < numVertices; v++) {
      if (this.lowlink[v] === -1) {
        this.tarjan(v);
      }
    }

    return this.scc;
  }

  tarjan(v) {
    this.lowlink[v] = this.index;
    this.index++;
    this.stack.push(v);
    this.onStack[v] = true;

    for (let w of this.adjList[v]) {
      if (this.lowlink[w] === -1) {
        this.tarjan(w);
        this.lowlink[v] = Math.min(this.lowlink[v], this.lowlink[w]);
      } else if (this.onStack[w]) {
        this.lowlink[v] = Math.min(this.lowlink[v], this.lowlink[w]);
      }
    }

    if (this.lowlink[v] === this.index - 1) {
      let component = [];
      let w;

      do {
        w = this.stack.pop();
        this.onStack[w] = false;
        component.push(w);
      } while (w !== v);

      this.scc.push(component);
    }
  }
}

// Example usage:
const adjList = [
  [1],     // 0 -> 1
  [2, 3],  // 1 -> 2, 3
  [0],     // 2 -> 0
  [4],     // 3 -> 4
  [3, 5],  // 4 -> 3, 5
  [2, 6],  // 5 -> 2, 6
  [5],     // 6 -> 5
];

const tarjan = new TarjanSCC(adjList);
const scc = tarjan.findSCC();

console.log(scc);
