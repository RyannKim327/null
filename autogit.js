class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(name) {
    this.nodes[name] = [];
  }

  addEdge(startNode, endNode) {
    this.nodes[startNode].push(endNode);
    this.nodes[endNode].push(startNode);
  }
}
function bidirectionalSearch(startNode, endNode, graph) {
  // Create two queues, one for forward search and one for reverse search
  const forwardQueue = [startNode];
  const reverseQueue = [endNode];

  // Create two sets to keep track of visited nodes
  const forwardVisited = new Set();
  const reverseVisited = new Set();

  // Start the search
  while (forwardQueue.length && reverseQueue.length) {
    // Perform forward search
    const forwardCurrentNode = forwardQueue.shift();
    forwardVisited.add(forwardCurrentNode);

    // Check if we reach the end node
    if (reverseVisited.has(forwardCurrentNode)) {
      return true; // Path found
    }

    // Add unvisited neighbors to the forward queue
    graph.nodes[forwardCurrentNode].forEach((neighbor) => {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
      }
    });

    // Perform reverse search
    const reverseCurrentNode = reverseQueue.shift();
    reverseVisited.add(reverseCurrentNode);

    // Check if we reach the start node
    if (forwardVisited.has(reverseCurrentNode)) {
      return true; // Path found
    }

    // Add unvisited neighbors to the reverse queue
    graph.nodes[reverseCurrentNode].forEach((neighbor) => {
      if (!reverseVisited.has(neighbor)) {
        reverseQueue.push(neighbor);
      }
    });
  }

  return false; // Path not found
}
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

const startNode = 'A';
const endNode = 'F';

const pathExists = bidirectionalSearch(startNode, endNode, graph);
console.log(pathExists); // true
