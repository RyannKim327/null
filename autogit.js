class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }

  bfs(startingNode) {
    let visited = {};
    let queue = [];

    visited[startingNode] = true;
    queue.push(startingNode);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode);

      let neighbors = this.adjList.get(currentNode);

      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
}

// Sample Usage
let g = new Graph();

g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");

g.bfs("A");
