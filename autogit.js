class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addEdge(v, w) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
    this.adjList.get(v).push(w);
  }

  tarjan() {
    let index = 0;
    const stack = [];
    const lowLink = new Map();
    const onStack = new Set();
    const result = [];

    const dfs = (v) => {
      lowLink.set(v, index);
      index++;
      stack.push(v);
      onStack.add(v);

      if (this.adjList.has(v)) {
        const neighbors = this.adjList.get(v);
        for (let i = 0; i < neighbors.length; i++) {
          const w = neighbors[i];
          if (!lowLink.has(w)) {
            dfs(w);
            lowLink.set(v, Math.min(lowLink.get(v), lowLink.get(w)));
          } else if (onStack.has(w)) {
            lowLink.set(v, Math.min(lowLink.get(v), lowLink.get(w)));
          }
        }
      }

      if (lowLink.get(v) === index - 1) {
        const scc = [];
        let w;
        do {
          w = stack.pop();
          onStack.delete(w);
          scc.push(w);
        } while (w !== v);
        result.push(scc);
      }
    };

    for (let v = 0; v < this.vertices; v++) {
      if (!lowLink.has(v)) {
        dfs(v);
      }
    }

    return result;
  }
}

// Example usage:
const graph = new Graph(5);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(1, 0);
graph.addEdge(0, 3);
graph.addEdge(3, 4);
console.log(graph.tarjan()); // [[4], [3], [0, 1, 2]]
