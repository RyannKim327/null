class Graph {
  constructor() {
    this.vertices = new Set();
    this.edges = {};
  }

  addEdge(start, end) {
    this.vertices.add(start);
    this.vertices.add(end);

    if (!this.edges[start]) {
      this.edges[start] = [];
    }
    this.edges[start].push(end);

    if (!this.edges[end]) {
      this.edges[end] = [];
    }
    this.edges[end].push(start);
  }
}
function bidirectionalSearch(graph, start, goal) {
  // Create the forward and backward search queues
  const forwardQueue = [{ node: start, path: [start] }];
  const backwardQueue = [{ node: goal, path: [goal] }];

  // Track visited nodes from both directions
  const forwardVisited = new Set([start]);
  const backwardVisited = new Set([goal]);

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Explore the forward direction
    const forwardNode = forwardQueue.shift();
    const forwardNeighbors = graph.edges[forwardNode.node] || [];

    for (const neighbor of forwardNeighbors) {
      if (!forwardVisited.has(neighbor)) {
        const path = [...forwardNode.path, neighbor];
        if (backwardVisited.has(neighbor)) {
          return [...path.reverse(), ...backwardQueue.find(q => q.node === neighbor).path];
        }

        forwardVisited.add(neighbor);
        forwardQueue.push({ node: neighbor, path });
      }
    }

    // Explore the backward direction
    const backwardNode = backwardQueue.shift();
    const backwardNeighbors = graph.edges[backwardNode.node] || [];

    for (const neighbor of backwardNeighbors) {
      if (!backwardVisited.has(neighbor)) {
        const path = [...backwardNode.path, neighbor];
        if (forwardVisited.has(neighbor)) {
          return [...forwardQueue.find(q => q.node === neighbor).path, ...path.reverse()];
        }

        backwardVisited.add(neighbor);
        backwardQueue.push({ node: neighbor, path });
      }
    }
  }

  // No path found
  return [];
}
const graph = new Graph();

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
graph.addEdge("E", "G");
graph.addEdge("G", "H");
graph.addEdge("H", "I");
const startNode = "A";
const goalNode = "I";

const path = bidirectionalSearch(graph, startNode, goalNode);
console.log(path);
