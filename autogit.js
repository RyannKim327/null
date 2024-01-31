class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(node) {
    this.adjList.set(node, []);
  }

  addEdge(src, dest) {
    this.adjList.get(src).push(dest);
  }

  dfs(startNode) {
    const visited = new Set();

    this._dfsHelper(startNode, visited);
  }

  _dfsHelper(node, visited) {
    visited.add(node);
    console.log(node);

    const neighbors = this.adjList.get(node);
    
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this._dfsHelper(neighbor, visited);
      }
    }
  }
}

// Usage example:

const graph = new Graph();

// Add nodes to the graph
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

// Add edges
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

// Perform DFS starting from node 1
graph.dfs(1);
