class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }

  dfs(startingNode) {
    let visited = {};
    this._dfsHelper(startingNode, visited);
  }

  _dfsHelper(node, visited) {
    if (!visited[node]) {
      visited[node] = true;
      console.log(node);

      let neighbors = this.adjList.get(node);

      for (let neighbor of neighbors) {
        this._dfsHelper(neighbor, visited);
      }
    }
  }
}

// Example usage
let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');

console.log('Depth First Search:');
graph.dfs('A');
