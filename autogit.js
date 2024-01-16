class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(item) {
    this.items.push(item);
  }
  
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
  
  addNeighbor(node) {
    this.neighbors.push(node);
  }
}

function biDirectionalSearch(startNode, targetNode) {
  const startQueue = new Queue();
  const targetQueue = new Queue();

  startQueue.enqueue(startNode);
  targetQueue.enqueue(targetNode);

  const startVisited = new Set();
  startVisited.add(startNode);

  const targetVisited = new Set();
  targetVisited.add(targetNode);

  const startParent = {};
  startParent[startNode.value] = null;

  const targetParent = {};
  targetParent[targetNode.value] = null;

  while (!startQueue.isEmpty() && !targetQueue.isEmpty()) {
    const startCurrentNode = startQueue.dequeue();
    if (targetVisited.has(startCurrentNode)) {
      return reconstructPath(startParent, targetParent, startCurrentNode.value);
    }

    const targetCurrentNode = targetQueue.dequeue();
    if (startVisited.has(targetCurrentNode)) {
      return reconstructPath(startParent, targetParent, targetCurrentNode.value);
    }

    for (const neighbor of startCurrentNode.neighbors) {
      if (!startVisited.has(neighbor)) {
        startQueue.enqueue(neighbor);
        startVisited.add(neighbor);
        startParent[neighbor.value] = startCurrentNode;
      }
    }

    for (const neighbor of targetCurrentNode.neighbors) {
      if (!targetVisited.has(neighbor)) {
        targetQueue.enqueue(neighbor);
        targetVisited.add(neighbor);
        targetParent[neighbor.value] = targetCurrentNode;
      }
    }
  }

  return null; // Path not found
}

function reconstructPath(startParent, targetParent, intersectionNodeValue) {
  const startPath = [];
  let current = startParent[intersectionNodeValue];
  while (current !== null) {
    startPath.unshift(current.value);
    current = startParent[current.value];
  }

  const targetPath = [];
  current = targetParent[intersectionNodeValue];
  while (current !== null) {
    targetPath.push(current.value);
    current = targetParent[current.value];
  }

  return startPath.concat(targetPath);
}

// Example usage
const nodeA = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");

nodeA.addNeighbor(nodeB);
nodeB.addNeighbor(nodeC);
nodeC.addNeighbor(nodeD);
nodeD.addNeighbor(nodeE);

const path = biDirectionalSearch(nodeA, nodeE);
console.log(path); // Output: ["A", "B", "C", "D", "E"]
