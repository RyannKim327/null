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
  // Create visited sets and queues for both searches
  const sourceVisited = new Set();
  const targetVisited = new Set();
  const sourceQueue = [];
  const targetQueue = [];

  // Initialize starting points for both searches
  sourceVisited.add(source);
  targetVisited.add(target);
  sourceQueue.push(source);
  targetQueue.push(target);

  while (sourceQueue.length > 0 && targetQueue.length > 0) {
    // Perform search from the source side
    const sourceNode = sourceQueue.shift();
    const sourceNeighbors = graph.nodes[sourceNode];

    for (const neighbor of sourceNeighbors) {
      if (!sourceVisited.has(neighbor)) {
        sourceVisited.add(neighbor);
        sourceQueue.push(neighbor);

        // Check if the node is visited by the target search
        if (targetVisited.has(neighbor)) {
          return true; // Intersection found
        }
      }
    }

    // Perform search from the target side
    const targetNode = targetQueue.shift();
    const targetNeighbors = graph.nodes[targetNode];

    for (const neighbor of targetNeighbors) {
      if (!targetVisited.has(neighbor)) {
        targetVisited.add(neighbor);
        targetQueue.push(neighbor);

        // Check if the node is visited by the source search
        if (sourceVisited.has(neighbor)) {
          return true; // Intersection found
        }
      }
    }
  }

  return false; // No intersection found
}
const graph = new Graph();

// Add nodes
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');

const source = 'A';
const target = 'E';

const hasPath = biDirectionalSearch(graph, source, target);
console.log(hasPath); // Output: true
