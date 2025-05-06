class Graph {
  private adjList: Map<string, string[]>;

  constructor() {
    this.adjList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex: string): void {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  // Add an edge to the graph
  addEdge(vertex1: string, vertex2: string): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjList.get(vertex1)!.push(vertex2);
    this.adjList.get(vertex2)!.push(vertex1); // For undirected graph
  }

  // Implement BFS
  bfs(startVertex: string): string[] {
    let visited: Set<string> = new Set();
    let queue: string[] = [];
    let result: string[] = [];

    visited.add(startVertex);
    queue.push(startVertex);

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      result.push(vertex);

      const neighbors = this.adjList.get(vertex) || [];
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

// Example usage:
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');

const bfsResult = graph.bfs('A');
console.log(bfsResult); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
