class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(id) {
    this.vertices.set(id, {
      id,
      index: -1,
      lowlink: -1,
      onStack: false,
      edges: []
    });
  }

  addEdge(v1, v2) {
    this.vertices.get(v1).edges.push(v2);
  }
}
function tarjanSCC(graph) {
  let index = 0;
  const stack = [];
  const result = [];

  function strongConnect(vertex) {
    const v = graph.vertices.get(vertex);
    v.index = index;
    v.lowlink = index;
    index++;
    stack.push(v.id);
    v.onStack = true;

    for (const edge of v.edges) {
      const next = graph.vertices.get(edge);

      if (next.index === -1) {
        strongConnect(next.id);
        v.lowlink = Math.min(v.lowlink, next.lowlink);
      } else if (next.onStack) {
        v.lowlink = Math.min(v.lowlink, next.index);
      }
    }

    if (v.lowlink === v.index) {
      const component = [];
      let w;
      do {
        w = stack.pop();
        graph.vertices.get(w).onStack = false;
        component.push(w);
      } while (w !== v.id);
      result.push(component);
    }
  }

  for (const vertex of graph.vertices.keys()) {
    if (graph.vertices.get(vertex).index === -1) {
      strongConnect(vertex);
    }
  }

  return result;
}
// Example usage:
const graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(3, 4);

const result = tarjanSCC(graph);
console.log(result); // Prints: [[0, 2, 1], [4], [3]]
