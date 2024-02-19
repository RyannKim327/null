class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = [];
  }

  addEdge(node1, node2) {
    this.nodes[node1].push(node2);
    this.nodes[node2].push(node1);
  }
}

function biDirectionalSearch(graph, source, target) {
  let visitedFromSource = {};
  let visitedFromTarget = {};

  let queueSource = [source];
  let queueTarget = [target];

  visitedFromSource[source] = true;
  visitedFromTarget[target] = true;

  while (queueSource.length > 0 && queueTarget.length > 0) {
    let currentNodeSource = queueSource.shift();
    let currentNodeTarget = queueTarget.shift();

    if (visitedFromTarget[currentNodeSource] || visitedFromSource[currentNodeTarget]) {
      return true;
    }

    for (let neighbor of graph.nodes[currentNodeSource]) {
      if (!visitedFromSource[neighbor]) {
        visitedFromSource[neighbor] = true;
        queueSource.push(neighbor);
      }
    }

    for (let neighbor of graph.nodes[currentNodeTarget]) {
      if (!visitedFromTarget[neighbor]) {
        visitedFromTarget[neighbor] = true;
        queueTarget.push(neighbor);
      }
    }
  }

  return false;
}

// Example usage
let graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');

console.log(biDirectionalSearch(graph, 'A', 'D')); // Output: true
