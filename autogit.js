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
      throw new Error('Vertex does not exist in the graph.');
    }

    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }

  dfs(startVertex) {
    const visited = new Set();

    const dfsHelper = (vertex) => {
      console.log(vertex);
      visited.add(vertex);

      const neighbors = this.adjList[vertex];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };

    dfsHelper(startVertex);
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
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');

graph.dfs('A');
