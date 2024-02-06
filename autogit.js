class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(u, v) {
    this.adjList.get(u).push(v);
  }
}
function tarjanSCC(graph) {
  let index = 0; // Depth index
  let stack = []; // Stack to store visited nodes
  let lowlink = new Array(graph.vertices).fill(0); // Tracks the lowest reachable node in a SCC
  let ids = new Array(graph.vertices).fill(-1); // Tracks the order in which nodes are visited
  let onStack = new Array(graph.vertices).fill(false); // Tracks if a node is on the stack
  let SCCs = []; // Result array to store the strongly connected components

  function dfs(node) {
    stack.push(node);
    onStack[node] = true;
    ids[node] = lowlink[node] = index++;

    for (let neighbor of graph.adjList.get(node)) {
      if (ids[neighbor] === -1) {
        dfs(neighbor);
      }
      if (onStack[neighbor]) {
        lowlink[node] = Math.min(lowlink[node], lowlink[neighbor]);
      }
    }

    if (ids[node] === lowlink[node]) {
      let SCC = [];
      let current;
      do {
        current = stack.pop();
        onStack[current] = false;
        SCC.push(current);
      } while (current !== node);
      SCCs.push(SCC);
    }
  }

  for (let i = 0; i < graph.vertices; i++) {
    if (ids[i] === -1) {
      dfs(i);
    }
  }

  return SCCs;
}
let graph = new Graph(5); // Create a graph instance with 5 vertices
graph.addEdge(1, 0);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(0, 3);
graph.addEdge(3, 4);
let result = tarjanSCC(graph);
console.log(result);
