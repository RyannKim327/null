// Create a graph class
class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (let v of vertices) {
      this.adjList.set(v, []);
    }
  }

  // Add an edge to the graph
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  // Depth-First Search traversal
  dfs(startingNode) {
    let visited = {};
    this._dfsUtil(startingNode, visited);
  }

  // Recursive utility function for DFS
  _dfsUtil(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);

    let neighbors = this.adjList.get(vertex);
    for (let neighbor of neighbors) {
      if (!visited[neighbor]) {
        this._dfsUtil(neighbor, visited);
      }
    }
  }
}

// Test the depth-first search algorithm
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let graph = new Graph(vertices);

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('C', 'G');
graph.addEdge('E', 'H');

console.log('Depth-First Traversal:');
graph.dfs('A');
