function Graph(numNodes) {
  this.numNodes = numNodes;
  this.adjList = new Array(numNodes).fill(null).map(() => []);
}

Graph.prototype.addEdge = function (from, to) {
  this.adjList[from].push(to);
};

Graph.prototype.getAdjList = function () {
  return this.adjList;
};
function tarjanSCC(graph) {
  let index = 0;
  let stack = [];
  let onStack = new Array(graph.numNodes).fill(false);
  let lowLink = new Array(graph.numNodes).fill(0);
  let indexMap = new Array(graph.numNodes).fill(-1);
  let result = [];

  function strongConnect(node) {
    indexMap[node] = index;
    lowLink[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    const adjList = graph.getAdjList();
    for (let i = 0; i < adjList[node].length; i++) {
      const neighbor = adjList[node][i];
      if (indexMap[neighbor] === -1) {
        strongConnect(neighbor);
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      } else if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], indexMap[neighbor]);
      }
    }

    if (lowLink[node] === indexMap[node]) {
      const component = [];
      let w;
      do {
        w = stack.pop();
        onStack[w] = false;
        component.push(w);
      } while (w !== node);
      result.push(component);
    }
  }

  for (let node = 0; node < graph.numNodes; node++) {
    if (indexMap[node] === -1) {
      strongConnect(node);
    }
  }

  return result;
}
const graph = new Graph(8);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(5, 3);
graph.addEdge(2, 3);
graph.addEdge(3, 6);
graph.addEdge(6, 7);
graph.addEdge(7, 4);

const components = tarjanSCC(graph);
console.log(components);
