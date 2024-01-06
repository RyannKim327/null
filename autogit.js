class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex/node to the graph
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge/connection between two vertices/nodes
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      const connections1 = this.adjacencyList.get(vertex1);
      const connections2 = this.adjacencyList.get(vertex2);
      connections1.push(vertex2);
      connections2.push(vertex1);
    }
  }

  // Depth-First Search algorithm
  dfs(startVertex) {
    const visited = new Set();
    this._dfsRecursive(startVertex, visited);
  }

  _dfsRecursive(vertex, visited) {
    visited.add(vertex);
    console.log(vertex);

    const connections = this.adjacencyList.get(vertex);
    for (const connection of connections) {
      if (!visited.has(connection)) {
        this._dfsRecursive(connection, visited);
      }
    }
  }
}

// Example usage:
const graph = new Graph();

// Create the nodes/vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Create the connections/edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// Perform depth-first search starting from vertex 'A'
graph.dfs('A');
