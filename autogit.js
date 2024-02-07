function Graph() {
  this.adjList = {};
}

Graph.prototype.addEdge = function (v, w) {
  if (!(v in this.adjList)) {
    this.adjList[v] = [];
  }
  this.adjList[v].push(w);
};
function tarjanSCC(graph) {
  let index = 0;
  let stack = [];
  let ids = {};
  let lowLink = {};
  let onStack = {};

  let result = [];

  function dfs(node) {
    ids[node] = index;
    lowLink[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    for (const neighbor of graph.adjList[node]) {
      if (!ids[neighbor]) {
        dfs(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], ids[neighbor]);
      }
    }

    if (ids[node] === lowLink[node]) {
      let component = [];
      let curr;

      do {
        curr = stack.pop();
        onStack[curr] = false;
        component.push(curr);
      } while (curr !== node);

      result.push(component);
    }
  }

  for (const node in graph.adjList) {
    if (!ids[node]) {
      dfs(node);
    }
  }

  return result;
}
let g = new Graph();

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("C", "A");
g.addEdge("B", "D");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("F", "D");
g.addEdge("G", "F");
g.addEdge("G", "H");
g.addEdge("H", "I");
g.addEdge("I", "J");
g.addEdge("J", "G");
let stronglyConnectedComponents = tarjanSCC(g);

console.log(stronglyConnectedComponents);
