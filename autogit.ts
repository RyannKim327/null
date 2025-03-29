class Graph {
  private adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: number) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: number, vertex2: number) {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }

  depthFirstSearch(startingVertex: number) {
    const visited: Set<number> = new Set();
    this.dfsRecursive(startingVertex, visited);
  }

  private dfsRecursive(vertex: number, visited: Set<number>) {
    visited.add(vertex);
    console.log(vertex);

    const neighbors = this.adjacencyList.get(vertex);
    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfsRecursive(neighbor, visited);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

graph.depthFirstSearch(0);
