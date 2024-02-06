class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Array(numVertices);
    for (let i = 0; i < numVertices; i++) {
      this.adjList[i] = [];
    }
  }

  addEdge(src, dest) {
    this.adjList[src].push(dest);
  }
}
function tarjansAlgorithm(graph) {
  let index = 0;
  let stack = [];
  let ids = new Array(graph.numVertices).fill(-1);
  let lowLink = new Array(graph.numVertices);
  let onStack = new Array(graph.numVertices).fill(false);
  let result = [];

  for (let v = 0; v < graph.numVertices; v++) {
    if (ids[v] === -1) {
      strongConnect(graph, v);
    }
  }

  function strongConnect(graph, vertex) {
    ids[vertex] = index;
    lowLink[vertex] = index;
    index++;
    stack.push(vertex);
    onStack[vertex] = true;

    for (const neighbor of graph.adjList[vertex]) {
      if (ids[neighbor] === -1) {
        strongConnect(graph, neighbor);
        lowLink[vertex] = Math.min(lowLink[vertex], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[vertex] = Math.min(lowLink[vertex], ids[neighbor]);
      }
    }

    if (ids[vertex] === lowLink[vertex]) {
      let component = [];
      let v;
      do {
        v = stack.pop();
        onStack[v] = false;
        component.push(v);
      } while (v !== vertex);

      result.push(component);
    }
  }

  return result;
}
const graph = new Graph(8);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);
graph.addEdge(6, 5);
graph.addEdge(6, 7);
graph.addEdge(7, 6);

const components = tarjansAlgorithm(graph);
console.log(components);
