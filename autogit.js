class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      throw new Error("Vertex not found");
    }

    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }

  depthFirstSearch(startingVertex) {
    const visited = {};
    const stack = [startingVertex];
    const result = [];

    while (stack.length > 0) {
      const currentVertex = stack.pop();
      
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);

        this.vertices[currentVertex].forEach(neighbor => {
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
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log(graph.depthFirstSearch("A")); // Output: ['A', 'C', 'D', 'B']
