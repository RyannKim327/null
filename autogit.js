class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1] || !this.adjList[vertex2]) {
      throw new Error("Vertex not found");
    }

    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1); // For undirected graph
  }

  depthFirstSearch(startVertex) {
    const visited = {};
    const stack = [startVertex];
    const result = [];

    while (stack.length) {
      const currentVertex = stack.pop();

      if (!visited[currentVertex]) {
        result.push(currentVertex);
        visited[currentVertex] = true;

        this.adjList[currentVertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            stack.push(neighbor);
          }
        });
      }
    }

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

console.log(graph.depthFirstSearch('A')); // Output: ['A', 'C', 'E', 'B', 'D']
