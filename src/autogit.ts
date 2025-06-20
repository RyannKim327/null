// Define a class to represent the graph
class Graph {
  // Adjacency list to store the graph
  private adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex: number): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // Add an edge between two vertices
  addEdge(vertex1: number, vertex2: number): void {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1)?.push(vertex2);
      this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    } else {
      throw new Error("Both vertices must exist in the graph.");
    }
  }

  // Breadth-First Search implementation
  bfs(startVertex: number): number[] {
    const visited: Set<number> = new Set(); // To track visited nodes
    const queue: number[] = []; // Queue for BFS
    const result: number[] = []; // To store the traversal order

    // Initialize the BFS
    visited.add(startVertex);
    queue.push(startVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift()!; // Dequeue the first element
      result.push(currentVertex); // Add to result

      // Visit all neighbors of the current vertex
      const neighbors = this.adjacencyList.get(currentVertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}

// Example usage
const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log("BFS Traversal:", graph.bfs(1)); // Output: [1, 2, 3, 4]
