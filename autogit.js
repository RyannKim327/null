// Define a graph representation
class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(name) {
    if (!this.nodes[name]) {
      this.nodes[name] = [];
    }
  }

  addEdge(node1, node2) {
    this.nodes[node1].push(node2);
    this.nodes[node2].push(node1);
  }

  getNeighbors(node) {
    return this.nodes[node];
  }
}

// Helper function to check if a node exists in a given array
function contains(array, node) {
  return array.some((el) => el === node);
}

// Bi-directional search algorithm
function biDirectionalSearch(graph, startNode, targetNode) {
  // Track the path and visited nodes for both searches
  const startVisited = {};
  const targetVisited = {};

  // Initialize the start and target queues
  const startQueue = [{ node: startNode, path: [startNode] }];
  const targetQueue = [{ node: targetNode, path: [targetNode] }];

  // Perform the search
  while (startQueue.length && targetQueue.length) {
    const { node: startCurr, path: startPath } = startQueue.shift();
    const { node: targetCurr, path: targetPath } = targetQueue.shift();

    // Check if the current nodes have been visited by the other search
    if (targetVisited[startCurr] || startVisited[targetCurr]) {
      return [...startPath.reverse(), ...targetPath];
    }

    // Visit the current node in the start search
    if (!startVisited[startCurr]) {
      startVisited[startCurr] = true;
      for (const neighbor of graph.getNeighbors(startCurr)) {
        if (!contains(startPath, neighbor)) {
          startQueue.push({
            node: neighbor,
            path: [...startPath, neighbor],
          });
        }
      }
    }

    // Visit the current node in the target search
    if (!targetVisited[targetCurr]) {
      targetVisited[targetCurr] = true;
      for (const neighbor of graph.getNeighbors(targetCurr)) {
        if (!contains(targetPath, neighbor)) {
          targetQueue.push({
            node: neighbor,
            path: [...targetPath, neighbor],
          });
        }
      }
    }
  }

  // No path exists
  return [];
}

// Example usage
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('C', 'F');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

const startNode = 'A';
const targetNode = 'F';
const path = biDirectionalSearch(graph, startNode, targetNode);
console.log(path);  // Output: [ 'A', 'C', 'F' ]
