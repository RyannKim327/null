function Graph(numVertices) {
  this.numVertices = numVertices;
  this.adjList = Array.from({ length: numVertices }, () => []);
}
Graph.prototype.addEdge = function (u, v) {
  this.adjList[u].push(v);
};
function tarjanSCC(graph, v, disc, stack, low, callback) {
  // Initiate discovery time and low-link value for current node
  disc[v] = low[v] = ++tarjanSCC.time;
  stack.push(v);
  graph.adjList[v].forEach(function (key) {
    var neighbor = key;
    if (disc[neighbor] === -1) {
      tarjanSCC(graph, neighbor, disc, stack, low, callback);
      low[v] = Math.min(low[v], low[neighbor]);
    } else if (stack.includes(neighbor)) {
      low[v] = Math.min(low[v], disc[neighbor]);
    }
  });

  var w = -1; // To store strongly connected vertices
  if (low[v] === disc[v]) {
    var scc = [];
    while (w !== v) {
      w = stack.pop();
      scc.push(w);
    }
    callback(scc);
  }
}

// Global variable to track time
tarjanSCC.time = 0;
function findSCC(graph) {
  var numVertices = graph.numVertices;
  var disc = Array(numVertices).fill(-1);
  var low = Array(numVertices).fill(-1);
  var visited = Array(numVertices).fill(false);
  var stack = [];
  var sccCallback = function (scc) {
    console.log("Strongly Connected Component:");
    console.log(scc);
  };

  for (var v = 0; v < numVertices; v++) {
    if (disc[v] === -1) {
      tarjanSCC(graph, v, disc, stack, low, sccCallback);
    }
  }
}
// Create a graph with 5 vertices
var graph = new Graph(5);

// Add edges
graph.addEdge(1, 0);
graph.addEdge(0, 2);
graph.addEdge(2, 1);
graph.addEdge(0, 3);
graph.addEdge(3, 4);

// Find strongly connected components
findSCC(graph);
Strongly Connected Component:
[4]
Strongly Connected Component:
[3]
Strongly Connected Component:
[0, 2, 1]
