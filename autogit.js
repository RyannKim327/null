class Node {
  constructor(value) {
    this.value = value;
    this.adjacentNodes = [];
  }
}
class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const newNode = new Node(value);
    this.nodes.push(newNode);
    return newNode;
  }

  addEdge(node1, node2) {
    node1.adjacentNodes.push(node2);
    node2.adjacentNodes.push(node1);
  }
}
function breadthFirstSearch(graph, startNode, targetValue) {
  const visited = new Set();
  const queue = [startNode];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    
    if (currentNode.value === targetValue) {
      return true; // The target value was found
    }
    
    visited.add(currentNode);
    
    for (const adjacentNode of currentNode.adjacentNodes) {
      if (!visited.has(adjacentNode)) {
        queue.push(adjacentNode);
      }
    }
  }
  
  return false; // The target value was not found
}
const graph = new Graph();
const nodeA = graph.addNode('A');
const nodeB = graph.addNode('B');
const nodeC = graph.addNode('C');
const nodeD = graph.addNode('D');
const nodeE = graph.addNode('E');

graph.addEdge(nodeA, nodeB);
graph.addEdge(nodeA, nodeC);
graph.addEdge(nodeB, nodeD);
graph.addEdge(nodeC, nodeE);

console.log(breadthFirstSearch(graph, nodeA, 'E')); // Output: true
console.log(breadthFirstSearch(graph, nodeA, 'F')); // Output: false
