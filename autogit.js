class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(source, destination) {
    this.adjList.get(source).push(destination);
  }
}
function topologicalSortUtil(vertex, visited, stack, graph) {
  visited.add(vertex);

  const neighbors = graph.adjList.get(vertex);
  for (let neighbor of neighbors) {
    if (!visited.has(neighbor))
      topologicalSortUtil(neighbor, visited, stack, graph);
  }

  stack.push(vertex);
}
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  for (let vertex of graph.adjList.keys()) {
    if (!visited.has(vertex))
      topologicalSortUtil(vertex, visited, stack, graph);
  }

  return stack.reverse();
}
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

const sortedVertices = topologicalSort(graph);
console.log(sortedVertices); // [4, 5, 2, 3, 1, 0]
