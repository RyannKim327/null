class TarjanSCC {
  constructor(graph) {
    this.graph = graph;
    this.component = [];
    this.low = [];
    this.ids = [];
    this.onStack = [];
    this.id = 0;

    this.stronglyConnectedComponents();
  }

  stronglyConnectedComponents() {
    for (let node = 0; node < this.graph.length; node++) {
      if (!this.ids[node]) {
        this.dfs(node);
      }
    }
  }

  dfs(node) {
    this.ids[node] = this.low[node] = ++this.id;
    this.onStack.push(node);

    for (let neighbor of this.graph[node]) {
      if (!this.ids[neighbor]) {
        this.dfs(neighbor);
        this.low[node] = Math.min(this.low[node], this.low[neighbor]);
      } else if (this.onStack.includes(neighbor)) {
        this.low[node] = Math.min(this.low[node], this.ids[neighbor]);
      }
    }

    if (this.low[node] === this.ids[node]) {
      const stronglyConnectedComponent = [];
      let curNode;
      do {
        curNode = this.onStack.pop();
        stronglyConnectedComponent.push(curNode);
      } while (curNode !== node);
      this.component.push(stronglyConnectedComponent);
    }
  }
}
const graph = [[1], [2, 4], [3], [0, 5], [2], [0, 6], [0, 2]];
const tarjan = new TarjanSCC(graph);
console.log(tarjan.component);
