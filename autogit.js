class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  dfs(startingVertex) {
    const stack = [startingVertex];
    const visited = new Set();

    visited.add(startingVertex);

    while (stack.length > 0) {
      const currentVertex = stack.pop();
      console.log(currentVertex); // Print the current vertex

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
          visited.add(neighbor);
        }
      });
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.dfs("A");
