class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    this.index = 0;
    this.stack = [];
    this.ids = new Array(vertices).fill(-1);
    this.lowLink = new Array(vertices).fill(-1);
    this.onStack = new Array(vertices).fill(false);
    this.scc = [];
  }

  addEdge(u, v) {
    if (!this.adjList.has(u)) {
      this.adjList.set(u, []);
    }
    this.adjList.get(u).push(v);
  }

  findSCC() {
    for (let i = 0; i < this.vertices; i++) {
      if (this.ids[i] === -1) {
        this.dfs(i);
      }
    }
    return this.scc;
  }

  dfs(node) {
    this.stack.push(node);
    this.onStack[node] = true;
    this.ids[node] = this.lowLink[node] = this.index++;
  
    if (this.adjList.has(node)) {
      const neighbors = this.adjList.get(node);
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (this.ids[neighbor] === -1) {
          this.dfs(neighbor);
        }
        if (this.onStack[neighbor]) {
          this.lowLink[node] = Math.min(this.lowLink[node], this.lowLink[neighbor]);
        }
      }
    }

    if (this.ids[node] == this.lowLink[node]) {
      const component = [];
      let w;
      do {
        w = this.stack.pop();
        this.onStack[w] = false;
        component.push(w);
      } while (w !== node);
      this.scc.push(component);
    }
  }
}
const graph = new Graph(7); // number of vertices

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);
graph.addEdge(5, 6);

const stronglyConnectedComponents = graph.findSCC();
console.log(stronglyConnectedComponents);
