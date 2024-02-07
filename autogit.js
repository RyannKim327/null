class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(source, destination) {
    this.adjList.get(source).push(destination);
    this.adjList.get(destination).push(source); // For an undirected graph
  }

  dfs(startVertex) {
    const visited = new Set(); // To keep track of visited vertices
    this._dfsRecursive(startVertex, visited);
  }

  _dfsRecursive(vertex, visited) {
    visited.add(vertex);
    console.log(vertex); // Process the current vertex (in this example, we're just printing it)

    const neighbors = this.adjList.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this._dfsRecursive(neighbor, visited);
      }
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

graph.dfs('A');
