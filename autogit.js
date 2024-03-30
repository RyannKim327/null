class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function bidirectionalSearch(startNode, endNode) {
  let startQueue = [startNode];
  let endQueue = [endNode];

  let startVisited = new Set();
  let endVisited = new Set();

  startVisited.add(startNode);
  endVisited.add(endNode);

  while (startQueue.length > 0 && endQueue.length > 0) {
    let currentStart = startQueue.shift();
    let currentEnd = endQueue.shift();

    if (endVisited.has(currentStart)) {
      console.log("Nodes meet in the middle!");
      return true;
    }

    if (startVisited.has(currentEnd)) {
      console.log("Nodes meet in the middle!");
      return true;
    }

    for (let child of currentStart.children) {
      if (!startVisited.has(child)) {
        startVisited.add(child);
        startQueue.push(child);
      }
    }

    for (let child of currentEnd.children) {
      if (!endVisited.has(child)) {
        endVisited.add(child);
        endQueue.push(child);
      }
    }
  }

  return false;
}

// Example usage:
let nodeA = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');

nodeA.children.push(nodeB);
nodeB.children.push(nodeC);
nodeC.children.push(nodeD);

console.log(bidirectionalSearch(nodeA, nodeD));
