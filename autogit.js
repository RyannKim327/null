class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = new Map();
  }

  addNode(node) {
    this.nodes.add(node);
    this.edges.set(node, new Map());
  }

  addEdge(source, target, weight) {
    this.edges.get(source).set(target, weight);
  }

  getNeighbors(node) {
    return this.edges.get(node);
  }
}
function initialize(graph, start) {
  const distances = new Map();
  const previous = new Map();

  for (const node of graph.nodes) {
    distances.set(node, Infinity);
    previous.set(node, null);
  }

  distances.set(start, 0);

  return { distances, previous };
}
function dijkstra(graph, start) {
  const { distances, previous } = initialize(graph, start);
  const unvisited = new Set(graph.nodes);

  while (unvisited.size > 0) {
    let minNode = null;

    for (const node of unvisited) {
      if (!minNode || distances.get(node) < distances.get(minNode)) {
        minNode = node;
      }
    }

    unvisited.delete(minNode);

    const neighbors = graph.getNeighbors(minNode);

    for (const neighbor of neighbors.keys()) {
      const distance = distances.get(minNode) + neighbors.get(neighbor);

      if (distance < distances.get(neighbor)) {
        distances.set(neighbor, distance);
        previous.set(neighbor, minNode);
      }
    }
  }

  return { distances, previous };
}
function getPath(previous, node) {
  const path = [];
  let current = node;

  while (current) {
    path.unshift(current);
    current = previous.get(current);
  }

  return path;
}
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addEdge("A", "B", 5);
graph.addEdge("B", "C", 3);
graph.addEdge("C", "D", 1);
graph.addEdge("A", "D", 10);

const { distances, previous } = dijkstra(graph, "A");
const shortestPath = getPath(previous, "D");

console.log(distances.get("D"));  // Output: 4
console.log(shortestPath);        // Output: ["A", "B", "C", "D"]
