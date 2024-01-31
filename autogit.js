// Define the Graph class
class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = {};
  }
  
  // Add a vertex to the graph
  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjacencyList[vertex] = [];
  }
  
  // Add an edge between two vertices
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  
  // Depth-first search algorithm
  dfs(startVertex) {
    const visited = {};
    for (const vertex of this.vertices) {
      visited[vertex] = false; // Initialize all vertices as not visited
    }
    
    this.dfsHelper(startVertex, visited);
  }
  
  // Depth-first search helper function
  dfsHelper(vertex, visited) {
    visited[vertex] = true; // Mark the current vertex as visited
    console.log(vertex); // Process the current vertex (e.g., print it)
    
    const neighbors = this.adjacencyList[vertex];
    for (const neighbor of neighbors) {
      if (!visited[neighbor]) {
        this.dfsHelper(neighbor, visited); // Recursively call the helper function for neighboring vertices
      }
    }
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("D", "E");

graph.dfs("A");
