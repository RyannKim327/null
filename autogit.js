// Class representing a graph
class Graph {
  constructor() {
    this.adjList = {};
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  // Add an edge between two vertices
  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  // Depth-first search algorithm
  dfs(start) {
    let visited = {};
    this._dfsHelper(start, visited);
  }

  // Helper function to perform DFS recursively
  _dfsHelper(vertex, visited) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      console.log(vertex);

      this.adjList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          this._dfsHelper(neighbor, visited);
        }
      });
    }
  }
}

// Create a graph
const graph = new Graph();

// Add vertices to the graph
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

// Add edges to the graph
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);

// Perform Depth-first search starting from vertex 0
graph.dfs(0);
