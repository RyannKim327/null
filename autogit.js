class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(v) {
    this.vertices[v] = [];
  }

  addEdge(v, w) {
    this.vertices[v].push(w);
  }

  dfs(startVertex) {
    const visited = {};

    // Helper function for recursive DFS traversal
    const dfsUtil = (vertex) => {
      visited[vertex] = true;
      console.log(vertex); // Do whatever you want with the vertex
  
      const neighbors = this.vertices[vertex];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited[neighbor]) {
          dfsUtil(neighbor);
        }
      }
    };

    dfsUtil(startVertex);
  }
}

// Example usage
const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('B', 'E');
g.addEdge('C', 'F');

g.dfs('A');
