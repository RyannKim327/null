class Node {
  constructor(id) {
    this.id = id; // Node ID or name
    this.index = -1; // Index used by Tarjan's algorithm
    this.lowLink = -1; // Low link used by Tarjan's algorithm
    this.onStack = false; // Flag to track if the node is on the stack
    this.adjacentNodes = []; // List of adjacent nodes
  }
}
function tarjanAlgorithm(nodes) {
  let index = 0; // Index counter
  const stack = []; // Stack to track visited nodes

  const stronglyConnectedComponents = []; // Resultant SCCs

  // Perform the Tarjan's algorithm for each unvisited node
  for (const node of nodes) {
    if (node.index === -1) {
      strongConnect(node);
    }
  }

  // The recursive function in Tarjan's algorithm
  function strongConnect(node) {
    node.index = index;
    node.lowLink = index;
    index++;
    stack.push(node);
    node.onStack = true;

    // Visit each adjacent node
    for (const adjacentNode of node.adjacentNodes) {
      if (adjacentNode.index === -1) {
        strongConnect(adjacentNode);
        node.lowLink = Math.min(node.lowLink, adjacentNode.lowLink);
      } else if (adjacentNode.onStack) {
        node.lowLink = Math.min(node.lowLink, adjacentNode.index);
      }
    }

    // If the node is a root node, generate an SCC
    if (node.lowLink === node.index) {
      const scc = [];
      let w;
      do {
        w = stack.pop();
        w.onStack = false;
        scc.push(w);
      } while (w !== node);
      stronglyConnectedComponents.push(scc);
    }
  }

  return stronglyConnectedComponents;
}
// Create graph nodes
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

// Connect nodes
nodeA.adjacentNodes.push(nodeB);
nodeB.adjacentNodes.push(nodeC);
nodeC.adjacentNodes.push(nodeA);
nodeC.adjacentNodes.push(nodeD);
nodeD.adjacentNodes.push(nodeE);
nodeE.adjacentNodes.push(nodeD);

// Create an array of all nodes in the graph
const allNodes = [nodeA, nodeB, nodeC, nodeD, nodeE];

// Call Tarjan's algorithm
const result = tarjanAlgorithm(allNodes);

// Print the strongly connected components
console.log("Strongly Connected Components:");
for (const component of result) {
  const names = component.map((node) => node.id).join(", ");
  console.log(names);
}
