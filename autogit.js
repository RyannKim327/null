class Graph {
  constructor() {
    this.adjList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }
  
  addEdge(src, dest) {
    this.adjList[src].push(dest);
    this.adjList[dest].push(src); // For undirected graph
  }
  
  depthFirstSearch(startVertex) {
    const visited = {};
    
    const dfs = (vertex) => {
      visited[vertex] = true;
      console.log(vertex);
      
      this.adjList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };
    
    dfs(startVertex);
  }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.depthFirstSearch('A');
