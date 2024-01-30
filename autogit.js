function Graph() {
  this.nodes = {};
}
Graph.prototype.addNode = function (node) {
  this.nodes[node] = [];
};
Graph.prototype.addEdge = function (src, dest) {
  this.nodes[src].push(dest);
};
Graph.prototype.tarjanSCC = function () {
  this.index = 0;
  this.stack = [];
  this.visited = {};
  this.lowLink = {};
  this.scc = [];

  for (var node in this.nodes) {
    if (!this.visited[node]) {
      this.tarjan(node);
    }
  }

  return this.scc;
};
Graph.prototype.tarjan = function (node) {
  this.visited[node] = this.index;
  this.lowLink[node] = this.index;
  this.index++;
  this.stack.push(node);

  var neighbors = this.nodes[node];

  for (var i = 0; i < neighbors.length; i++) {
    var neighbor = neighbors[i];

    if (!this.visited[neighbor]) {
      this.tarjan(neighbor);
      this.lowLink[node] = Math.min(this.lowLink[node], this.lowLink[neighbor]);
    } else if (this.stack.includes(neighbor)) {
      this.lowLink[node] = Math.min(this.lowLink[node], this.visited[neighbor]);
    }
  }

  if (this.lowLink[node] === this.visited[node]) {
    var component = [];
    var nextNode;

    do {
      nextNode = this.stack.pop();
      component.push(nextNode);
    } while (nextNode !== node);

    this.scc.push(component);
  }
};
// Example usage
var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addNode('F');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('F', 'D');

var sccs = graph.tarjanSCC();
console.log(sccs);
