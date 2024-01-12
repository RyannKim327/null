class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
  }

  bfs(startingNode) {
    const visited = new Set();
    const queue = [];

    visited.add(startingNode);
    queue.push(startingNode);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode);

      const neighbors = this.adjList.get(currentNode);

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

// example usage
const graph = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (const vertex of vertices) {
  graph.adjList.set(vertex, []);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

graph.bfs('A');
