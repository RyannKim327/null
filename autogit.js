class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = [];
    this.cost = Infinity;
    this.heuristic = 0;
    this.parent = null;
  }

  addNeighbor(neighbor, cost) {
    this.neighbors.push({ node: neighbor, cost });
  }
}
function createGraph() {
  const nodeA = new Node('A');
  const nodeB = new Node('B');
  const nodeC = new Node('C');
  const nodeD = new Node('D');
  const nodeE = new Node('E');
  const nodeF = new Node('F');
  
  nodeA.addNeighbor(nodeB, 5);
  nodeA.addNeighbor(nodeC, 2);
  nodeB.addNeighbor(nodeD, 1);
  nodeB.addNeighbor(nodeE, 6);
  nodeC.addNeighbor(nodeE, 3);
  nodeC.addNeighbor(nodeF, 8);
  nodeD.addNeighbor(nodeE, 4);
  nodeE.addNeighbor(nodeF, 1);
  
  return [nodeA, nodeB, nodeC, nodeD, nodeE, nodeF];
}
function aStarSearch(startNode, endNode) {
  const openSet = [startNode];
  const closedSet = [];
  
  startNode.cost = 0;
  
  while (openSet.length > 0) {
    // Find the node with the lowest total cost
    let currentNode = openSet[0];
    let currentIndex = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].cost + openSet[i].heuristic < currentNode.cost + currentNode.heuristic) {
        currentNode = openSet[i];
        currentIndex = i;
      }
    }
    
    // Path found
    if (currentNode === endNode) {
      let path = [];
      let tempNode = currentNode;
      while (tempNode !== null) {
        path.push(tempNode);
        tempNode = tempNode.parent;
      }
      return path.reverse();
    }
    
    // Move the current node from open to closed set
    openSet.splice(currentIndex, 1);
    closedSet.push(currentNode);
    
    // Explore neighboring nodes
    for (let neighbor of currentNode.neighbors) {
      let tentativeCost = currentNode.cost + neighbor.cost;
      if (tentativeCost < neighbor.node.cost) {
        neighbor.node.parent = currentNode;
        neighbor.node.cost = tentativeCost;
        neighbor.node.heuristic = /* Calculate the heuristic for the node */;
        
        if (!closedSet.includes(neighbor.node)) {
          if (!openSet.includes(neighbor.node)) {
            openSet.push(neighbor.node);
          }
        }
      }
    }
  }
  
  return null; // No path found
}
const [startNode, endNode, ...otherNodes] = createGraph();
const path = aStarSearch(startNode, endNode);
console.log(path);
