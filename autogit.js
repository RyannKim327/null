class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjacencyList.set(vertex, []);
  }

  addEdge(src, dest) {
    this.adjacencyList.get(src).push(dest);
    this.adjacencyList.get(dest).push(src);
  }

  depthFirstSearch(startingVertex) {
    const visited = new Set();

    const dfsRecursive = (vertex) => {
      visited.add(vertex);
      console.log(vertex);

      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsRecursive(neighbor);
        }
      }
    };

    dfsRecursive(startingVertex);
  }
}

// Usage example:
const graph = new Graph();

// Add vertices
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

// Add edges
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);

// Perform DFS
graph.depthFirstSearch(1);
