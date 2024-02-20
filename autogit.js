class Graph {
  constructor() {
    this.graph = {};
  }

  addNode(node) {
    if (!this.graph[node]) {
      this.graph[node] = [];
    }
  }

  addEdge(node1, node2) {
    this.addNode(node1);
    this.addNode(node2);
    this.graph[node1].push(node2);
  }

  dfs(startNode) {
    let visited = {};
    let result = [];

    const dfsUtil = (node) => {
      visited[node] = true;
      result.push(node);

      this.graph[node].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfsUtil(neighbor);
        }
      });
    };

    dfsUtil(startNode);

    return result;
  }
}

// Example usage
const graph = new Graph();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('C', 'G');

console.log(graph.dfs('A'));
