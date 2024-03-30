class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }

  breadthFirstSearch(startNode, endNode) {
    let visited = {};
    let queue = [];
    let path = [];
  
    queue.push(startNode);
    visited[startNode] = true;
  
    while (queue.length > 0) {
      let currentNode = queue.shift();
      path.push(currentNode);
  
      if (currentNode === endNode) {
        return path;
      }
  
      this.adjList[currentNode].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
  
    return "Path not found";
  }
}

// Example usage
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

const startNode = "A";
const endNode = "E";
console.log(graph.breadthFirstSearch(startNode, endNode));
