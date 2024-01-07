class DirectedGraph {
  constructor() {
    this.graph = {};
  }

  addVertex(vertex) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = [];
    }
  }

  addEdge(from, to) {
    if (!this.graph[from] || !this.graph[to]) {
      throw new Error("Invalid vertex");
    }
    this.graph[from].push(to);
  }
}
function tarjanSCC(graph) {
  let index = 0;
  let stack = [];
  let indices = {};
  let lowLinks = {};
  let onStack = {};
  let result = [];

  function strongConnect(vertex) {
    indices[vertex] = index;
    lowLinks[vertex] = index;
    index++;
    stack.push(vertex);
    onStack[vertex] = true;

    const neighbors = graph[vertex];
    neighbors.forEach((neighbor) => {
      if (indices[neighbor] === undefined) {
        strongConnect(neighbor);
        lowLinks[vertex] = Math.min(lowLinks[vertex], lowLinks[neighbor]);
      } else if (onStack[neighbor]) {
        lowLinks[vertex] = Math.min(lowLinks[vertex], indices[neighbor]);
      }
    });

    if (indices[vertex] === lowLinks[vertex]) {
      let component = [];
      let curr;
      do {
        curr = stack.pop();
        onStack[curr] = false;
        component.push(curr);
      } while (curr !== vertex);
      result.push(component);
    }
  }

  const vertices = Object.keys(graph);
  vertices.forEach((vertex) => {
    if (indices[vertex] === undefined) {
      strongConnect(vertex);
    }
  });

  return result;
}
const graph = new DirectedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
graph.addEdge("C", "D");

const scc = tarjanSCC(graph.graph);
console.log(scc); // Outputs: [ [ 'C', 'B', 'A' ], [ 'D' ] ]
