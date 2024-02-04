class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
  }

  addEdge(u, v) {
    if (!this.adjList.has(u)) {
      this.adjList.set(u, []);
    }
    this.adjList.get(u).push(v);
  }
}
function tarjanSCC(graph) {
  let index = 0;
  let stack = [];
  let ids = new Map();
  let lowLink = new Map();
  let onStack = new Set();
  let result = [];

  for (let v of graph.vertices) {
    if (!ids.has(v)) {
      dfs(v);
    }
  }

  function dfs(vertex) {
    ids.set(vertex, index);
    lowLink.set(vertex, index);
    index++;
    stack.push(vertex);
    onStack.add(vertex);

    if (graph.adjList.has(vertex)) {
      for (let neighbor of graph.adjList.get(vertex)) {
        if (!ids.has(neighbor)) {
          dfs(neighbor);
          lowLink.set(vertex, Math.min(lowLink.get(vertex), lowLink.get(neighbor)));
        } else if (onStack.has(neighbor)) {
          lowLink.set(vertex, Math.min(lowLink.get(vertex), ids.get(neighbor)));
        }
      }
    }

    if (ids.get(vertex) === lowLink.get(vertex)) {
      let component = [];
      let w;
      do {
        w = stack.pop();
        onStack.delete(w);
        component.push(w);
      } while (w !== vertex);

      result.push(component);
    }
  }

  return result;
}
let graph = new Graph(['A', 'B', 'C', 'D', 'E', 'F']);

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');
graph.addEdge('D', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('F', 'D');
let components = tarjanSCC(graph);
console.log(components);
