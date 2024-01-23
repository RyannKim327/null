class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Array(numVertices).fill().map(() => []);
  }

  addEdge(source, destination) {
    this.adjList[source].push(destination);
  }
}
let index = 0;
const stack = [];
const components = [];
function tarjanSCC(graph, callback) {
  const { numVertices, adjList } = graph;

  // Helper function to traverse the graph
  function traverse(vertex) {
    vertex.index = index;
    vertex.lowLink = index++;
    vertex.visited = true;
    stack.push(vertex);

    for (const neighbor of adjList[vertex]) {
      if (!neighbor.visited) {
        traverse(neighbor);
        vertex.lowLink = Math.min(vertex.lowLink, neighbor.lowLink);
      } else if (stack.includes(neighbor)) {
        vertex.lowLink = Math.min(vertex.lowLink, neighbor.index);
      }
    }

    if (vertex.lowLink === vertex.index) {
      const component = [];
      let v;
      do {
        v = stack.pop();
        component.push(v);
      } while (v !== vertex);
      callback(component);
    }
  }

  // Call Tarjan's algorithm for each unvisited vertex
  for (let i = 0; i < numVertices; i++) {
    if (!adjList[i].visited) {
      traverse(adjList[i]);
    }
  }
}
const graph = new Graph(6);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);

tarjanSCC(graph, (component) => {
  console.log(component.map((v) => v.index));
});
