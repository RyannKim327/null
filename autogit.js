// Create a graph object
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Add a new vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Add an undirected edge between two vertices
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Depth-first search algorithm
  dfs(startVertex) {
    const visited = {};
    const result = [];

    const dfsHelper = (vertex) => {
      // Mark the vertex as visited
      visited[vertex] = true;
      result.push(vertex);

      // Visit all neighbors
      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(startVertex);
    return result;
  }
}

// Create a graph object
const graph = new Graph();

// Add vertices to the graph
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Add edges to the graph
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// Perform depth-first search starting from vertex 'A'
const result = graph.dfs('A');
console.log(result);
