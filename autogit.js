function Graph() {
  this.nodes = {};
}
Graph.prototype.addNode = function(node, neighbors) {
  this.nodes[node] = neighbors;
};
function dijkstra(graph, startNode) {
  var distances = {};
  distances[startNode] = 0;
  
  // Set all other distances to infinity
  for (var node in graph.nodes) {
    if (node !== startNode) {
      distances[node] = Infinity;
    }
  }
}
function findMinNode(distances, visited) {
  var minNode = null;
  
  for (var node in distances) {
    if (!visited[node] && (minNode === null || distances[node] < distances[minNode])) {
      minNode = node;
    }
  }
  
  return minNode;
}
var visited = {};
var currentNode = startNode;

while (currentNode) {
  var neighbors = graph.nodes[currentNode];
  
  for (var neighbor in neighbors) {
    var distance = distances[currentNode] + neighbors[neighbor];
    if (distance < distances[neighbor]) {
      distances[neighbor] = distance;
    }
  }
  
  visited[currentNode] = true;
  currentNode = findMinNode(distances, visited);
}
var graph = new Graph();
graph.addNode('A', { B: 4, C: 2 });
graph.addNode('B', { C: 1, D: 5 });
graph.addNode('C', { B: 2, D: 8 });
graph.addNode('D', { E: 3 });
graph.addNode('E', {});

var startNode = 'A';
var distances = dijkstra(graph, startNode);

console.log(distances); // Output: { A: 0, B: 3, C: 2, D: 6, E: Infinity }
