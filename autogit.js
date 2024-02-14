class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (const vertex of vertices) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(u, v) {
    this.adjList.get(u).push(v);
  }
}
function tarjan(graph) {
  let index = 0;
  const stack = [];
  const visited = new Map();
  const lowLink = new Map();
  const onStack = new Map();
  const components = [];

  for (const vertex of graph.vertices) {
    visited.set(vertex, false);
    lowLink.set(vertex, -1);
    onStack.set(vertex, false);
  }

  function strongConnect(vertex) {
    visited.set(vertex, true);
    lowLink.set(vertex, index);
    index++;
    stack.push(vertex);
    onStack.set(vertex, true);

    const neighbors = graph.adjList.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.get(neighbor)) {
        strongConnect(neighbor);
        lowLink.set(vertex, Math.min(lowLink.get(vertex), lowLink.get(neighbor)));
      } else if (onStack.get(neighbor)) {
        lowLink.set(vertex, Math.min(lowLink.get(vertex), lowLink.get(neighbor)));
      }
    }

    if (lowLink.get(vertex) === index - 1) {
      const component = [];
      let v = null;
      do {
        v = stack.pop();
        onStack.set(v, false);
        component.push(v);
      } while (v !== vertex);
      components.push(component);
    }
  }

  for (const vertex of graph.vertices) {
    if (!visited.get(vertex)) {
      strongConnect(vertex);
    }
  }

  return components;
}
// Create a graph
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const graph = new Graph(vertices);

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('F', 'D');
graph.addEdge('G', 'F');
graph.addEdge('G', 'G');

// Run Tarjan's algorithm
const components = tarjan(graph);

// Print the strongly connected components
console.log(components);
