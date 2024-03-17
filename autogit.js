class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(from, to) {
    this.adjList.get(from).push(to);
    this.adjList.get(to).push(from); // Undirected graph
  }

  depthFirstSearch(start) {
    const visited = new Set();
    this._dfs(start, visited);
  }

  _dfs(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);

    const neighbors = this.adjList.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this._dfs(neighbor, visited);
      }
    }
  }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

graph.depthFirstSearch('A');
