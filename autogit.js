class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (const v of vertices) {
      this.adjList.set(v, []);
    }
  }

  addEdge(u, v) {
    this.adjList.get(u).push(v);
  }
}
function tarjanAlgorithm(graph) {
  const vertices = graph.vertices;
  const visited = new Set();
  const stack = [];
  const low = new Map();
  const ids = new Map();
  const result = [];

  let id = 0;

  for (const v of vertices) {
    if (!visited.has(v)) {
      dfs(v);
    }
  }

  function dfs(vertex) {
    visited.add(vertex);
    low.set(vertex, id);
    ids.set(vertex, id);
    id++;
    stack.unshift(vertex);

    const neighbors = graph.adjList.get(vertex);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }

      if (stack.includes(neighbor)) {
        low.set(vertex, Math.min(low.get(vertex), low.get(neighbor)));
      }
    }

    if (ids.get(vertex) === low.get(vertex)) {
      const component = [];

      let v;
      do {
        v = stack.shift();
        component.push(v);
      } while (v !== vertex);

      result.push(component);
    }
  }

  return result;
}
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const graph = new Graph(vertices);

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('F', 'D');
graph.addEdge('G', 'F');
graph.addEdge('G', 'G');

const components = tarjanAlgorithm(graph);
console.log(components);
[ [ 'D', 'E', 'F' ], [ 'C', 'A', 'B' ], [ 'G' ] ]
