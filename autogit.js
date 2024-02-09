class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjacencyList = new Map();
    for (const vertex of vertices) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(source, destination) {
    this.adjacencyList.get(source).push(destination);
  }

  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }

  // Add any additional methods here as needed
}
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  for (const vertex of graph.vertices) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  function dfs(vertex) {
    visited.add(vertex);

    for (const neighbor of graph.getNeighbors(vertex)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.unshift(vertex); // Add the vertex to the beginning of the stack
  }

  return stack;
}
const graph = new Graph(['A', 'B', 'C', 'D', 'E']);
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
const orderedVertices = topologicalSort(graph);
console.log(orderedVertices); // Output: ['A', 'B', 'C', 'D', 'E']
