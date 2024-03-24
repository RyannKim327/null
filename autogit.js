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

  depthFirstSearch(startingVertex) {
    const visited = {};
    const result = [];

    const dfs = (vertex) => {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    };

    dfs(startingVertex);

    return result;
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

console.log(graph.depthFirstSearch('A')); // Output: [ 'A', 'B', 'D', 'C', 'E' ]
