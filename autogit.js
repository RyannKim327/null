class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}
function depthFirstSearch(graph, startVertex) {
  const visited = {};
  const result = [];

  function dfs(vertex) {
    if (!vertex) return null;
    visited[vertex] = true;
    result.push(vertex);

    graph.adjacencyList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        dfs(neighbor);
      }
    });
  }

  dfs(startVertex);
  return result;
}
// Create a new graph
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

// Perform DFS starting from vertex 'A'
const dfsResult = depthFirstSearch(graph, 'A');
console.log(dfsResult); // Output: ["A", "B", "D", "E", "C", "F"]
