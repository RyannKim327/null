class Graph {
  constructor() {
    this.graph = {};
  }

  addEdge(node, edge) {
    if (!this.graph[node]) {
      this.graph[node] = [];
    }
    this.graph[node].push(edge);
  }

  dfs(node, visited = {}) {
    if (!node || visited[node]) {
      return;
    }

    visited[node] = true;
    console.log(node);

    this.graph[node].forEach((neighbor) => {
      this.dfs(neighbor, visited);
    });
  }
}

const graph = new Graph();

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('E', 'G');

graph.dfs('A');
