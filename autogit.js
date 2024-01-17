class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjacencyList[vertex] = [];
  }

  addEdge(from, to) {
    this.adjacencyList[from].push(to);
  }

  topologicalSort() {
    const result = [];
    const visited = new Set();

    const dfs = (vertex) => {
      visited.add(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      });

      result.unshift(vertex);
    };

    this.vertices.forEach((vertex) => {
      if (!visited.has(vertex)) {
        dfs(vertex);
      }
    });

    return result;
  }
}

// Example usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("B", "D");

console.log(graph.topologicalSort()); // Output: ["B", "A", "C", "D", "E"]
