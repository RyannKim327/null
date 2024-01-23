function Node(id) {
  this.id = id; // Unique identifier for the node
  this.lowLink = 0; // Minimum id of any node known to be reachable from this node
  this.index = 0; // Index used for Tarjan's algorithm
  this.onStack = false; // Whether the node is currently on the stack
  this.connections = []; // Adjacent nodes
}
function tarjan(graph) {
  var index = 0; // Counter for the node index
  var stack = []; // Stack to keep track of visited nodes

  // Array to store strongly connected components
  var components = [];

  // Visit each node in the graph
  graph.forEach(function(node) {
    if (node.index === 0) { // Unvisited node
      strongConnect(node);
    }
  });

  // Recursive function to perform the traversal
  function strongConnect(node) {
    // Set the depth index for the node
    node.index = index;
    node.lowLink = index;
    index++;
    stack.push(node);
    node.onStack = true;

    // Consider successors of the current node
    node.connections.forEach(function(adjacent) {
      if (adjacent.index === 0) { // Successor has not yet been visited
        strongConnect(adjacent);
        node.lowLink = Math.min(node.lowLink, adjacent.lowLink);
      } else if (adjacent.onStack) { // Successor is in the current SCC
        node.lowLink = Math.min(node.lowLink, adjacent.index);
      }
    });

    // If node is a root node, pop the stack to form a new SCC
    if (node.lowLink === node.index) {
      var component = [];
      var currentNode;
      do {
        currentNode = stack.pop();
        currentNode.onStack = false;
        component.push(currentNode);
      } while (currentNode !== node);
      components.push(component);
    }
  }

  return components;
}
// Example graph with 6 nodes
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);

// Connect the nodes to form a directed graph
node1.connections.push(node2);
node2.connections.push(node3);
node3.connections.push(node1);
node4.connections.push(node2);
node4.connections.push(node3);
node4.connections.push(node5);
node5.connections.push(node4);
node6.connections.push(node3);
node6.connections.push(node5);

var graph = [node1, node2, node3, node4, node5, node6];
var components = tarjan(graph);
console.log(components);
