class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(node) {
    this.adjList.set(node, []);
  }

  addEdge(node1, node2) {
    this.adjList.get(node1).push(node2);
    this.adjList.get(node2).push(node1);
  }

  getNeighbors(node) {
    return this.adjList.get(node);
  }
}
function breadthFirstSearch(graph, startNode) {
  let visited = new Set();
  let queue = new Queue();

  visited.add(startNode);
  queue.enqueue(startNode);

  while (!queue.isEmpty()) {
    let currentNode = queue.dequeue();
    console.log(currentNode);

    let neighbors = graph.getNeighbors(currentNode);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
}
let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

breadthFirstSearch(graph, "A");
