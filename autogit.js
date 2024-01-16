class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    // if the graph is undirected, include the following line
    // this.adjList.get(v2).push(v1);
  }

  depthFirstSearch(startingNode) {
    const visited = new Set();
    const stack = [];

    stack.push(startingNode);

    while (stack.length > 0) {
      const currentNode = stack.pop();

      if (!visited.has(currentNode)) {
        console.log(currentNode);
        visited.add(currentNode);

        const neighbors = this.adjList.get(currentNode);
        for (let neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    }
  }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

graph.depthFirstSearch('A');
