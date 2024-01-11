function tarjanAlgorithm(graph) {
  var index = 0;
  var stack = [];
  var scc = [];
  var indices = {};
  var lowLinks = {};

  // Step 3: Implement the depth-first search function
  function depthFirstSearch(node) {
    indices[node] = index;
    lowLinks[node] = index;
    index++;
    stack.push(node);

    var neighbors = graph[node];
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      if (!indices.hasOwnProperty(neighbor)) {
        depthFirstSearch(neighbor);
        lowLinks[node] = Math.min(lowLinks[node], lowLinks[neighbor]);
      } else if (stack.includes(neighbor)) {
        lowLinks[node] = Math.min(lowLinks[node], indices[neighbor]);
      }
    }

    if (lowLinks[node] === indices[node]) {
      var sccComponent = [];
      var connectedNode = null;
      do {
        connectedNode = stack.pop();
        sccComponent.push(connectedNode);
      } while (connectedNode !== node);

      scc.push(sccComponent);
    }
  }

  // Step 4: Call the depth-first search for each unvisited node
  for (var node in graph) {
    if (!indices.hasOwnProperty(node)) {
      depthFirstSearch(node);
    }
  }

  // Step 5: Return the strongly connected components
  return scc;
}
var graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['A', 'F'],
  'D': [],
  'E': ['F'],
  'F': ['G', 'H'],
  'G': ['E', 'H'],
  'H': ['I'],
  'I': ['J'],
  'J': ['G']
};

var stronglyConnectedComponents = tarjanAlgorithm(graph);
console.log(stronglyConnectedComponents);
