function Graph(nodes) {
  this.nodes = nodes;
  this.adjList = new Map();
  for (let node of this.nodes) {
    this.adjList.set(node, []);
  }

  this.addEdge = (u, v) => {
    this.adjList.get(u).push(v);
  };
}
let id = 0;
let stack = [];
let ids = [];
let lows = [];
let onStack = [];
let sccs = [];
function tarjanSCC(graph) {
  for (let node of graph.nodes) {
    if (ids[node] === undefined) {
      dfs(graph, node);
    }
  }
}

function dfs(graph, node) {
  stack.push(node);
  onStack[node] = true;
  ids[node] = lows[node] = id++;

  for (let neighbor of graph.adjList.get(node)) {
    if (ids[neighbor] === undefined) {
      dfs(graph, neighbor);
    }
    if (onStack[neighbor]) {
      lows[node] = Math.min(lows[node], lows[neighbor]);
    }
  }

  if (ids[node] === lows[node]) {
    let scc = [];

    let w;
    do {
      w = stack.pop();
      onStack[w] = false;
      scc.push(w);
    } while (w !== node);

    sccs.push(scc);
  }
}
let nodes = ["A", "B", "C", "D", "E", "F", "G"];
let graph = new Graph(nodes);

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("F", "D");
graph.addEdge("G", "E");
graph.addEdge("G", "F");

tarjanSCC(graph);

console.log(sccs);
[ [ 'A', 'B', 'C' ], [ 'D', 'F', 'E' ], [ 'G' ] ]
