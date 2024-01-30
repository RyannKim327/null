class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Array(vertices);
    for (let i = 0; i < vertices; i++) {
      this.adjList[i] = [];
    }
  }

  addEdge(u, v) {
    this.adjList[u].push(v);
  }

  getAdjList() {
    return this.adjList;
  }
}
function tarjanStronglyConnectedComponents(graph) {
  const vertices = graph.vertices;
  const adjList = graph.getAdjList();

  let index = 0; // Index of current node
  const stack = []; // Stack to store visited nodes
  const lowLink = new Array(vertices).fill(-1);
  const ids = new Array(vertices).fill(-1);
  const onStack = new Array(vertices).fill(false);

  const components = []; // Array to store strongly connected components

  function dfs(node) {
    stack.push(node);
    onStack[node] = true;
    ids[node] = index;
    lowLink[node] = index;
    index++;

    const neighbors = adjList[node];

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      if (ids[neighbor] === -1) {
        dfs(neighbor);
      }

      if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      }
    }

    if (lowLink[node] === ids[node]) {
      const component = [];

      let w;
      do {
        w = stack.pop();
        onStack[w] = false;
        component.push(w);
      } while (w !== node);

      components.push(component);
    }
  }

  // Perform DFS on every node
  for (let i = 0; i < vertices; i++) {
    if (ids[i] === -1) {
      dfs(i);
    }
  }

  return components;
}
const graph = new Graph(4);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);

const components = tarjanStronglyConnectedComponents(graph);

console.log(components); // Output: [[2, 1, 0], [3]]
