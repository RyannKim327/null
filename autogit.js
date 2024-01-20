class GraphNode {
  constructor(id) {
    this.id = id;
    this.neighbors = [];
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }
}
function dfs(startNode, visited) {
  // Mark the current node as visited
  visited.add(startNode);

  // Process the current node (print it, manipulate its data, etc.)
  console.log(startNode.id);

  // Traverse the neighbors
  for (const neighbor of startNode.neighbors) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited); // Recursively visit the neighbor
    }
  }
}
// Create nodes
const nodeA = new GraphNode('A');
const nodeB = new GraphNode('B');
const nodeC = new GraphNode('C');
const nodeD = new GraphNode('D');
const nodeE = new GraphNode('E');

// Connect nodes with edges
nodeA.addNeighbor(nodeB);
nodeA.addNeighbor(nodeC);
nodeB.addNeighbor(nodeD);
nodeD.addNeighbor(nodeE);
const visited = new Set();
dfs(nodeA, visited);
