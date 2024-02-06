class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Array(numVertices).fill(0).map(() => []);
  }

  addEdge(source, destination) {
    this.adjList[source].push(destination);
  }
}
function tarjanAlgorithm(graph) {
  const indexCounter = [];
  const lowLink = [];
  const onStack = [];
  const stack = [];
  const result = [];

  function strongConnect(v) {
    indexCounter[v] = lowLink[v] = indexCounter.length;
    stack.push(v);
    onStack[v] = true;

    for (const w of graph.adjList[v]) {
      if (indexCounter[w] === undefined) {
        strongConnect(w);
        lowLink[v] = Math.min(lowLink[v], lowLink[w]);
      } else if (onStack[w]) {
        lowLink[v] = Math.min(lowLink[v], indexCounter[w]);
      }
    }

    if (lowLink[v] === indexCounter[v]) {
      const component = [];
      let w;
      do {
        w = stack.pop();
        onStack[w] = false;
        component.push(w);
      } while (v !== w);
      result.push(component);
    }
  }

  for (let v = 0; v < graph.numVertices; v++) {
    if (indexCounter[v] === undefined) {
      strongConnect(v);
    }
  }

  return result;
}
// Create a graph with 6 vertices
const graph = new Graph(6);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);

// Find strongly connected component using Tarjan's algorithm
const components = tarjanAlgorithm(graph);

// Print the strongly connected components
console.log(components);
[ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
