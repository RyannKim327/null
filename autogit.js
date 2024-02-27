class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function biDirectionalSearch(startNode, endNode) {
  let startQueue = [startNode];
  let endQueue = [endNode];
  let startVisited = new Set();
  let endVisited = new Set();

  startVisited.add(startNode);
  endVisited.add(endNode);

  while (startQueue.length > 0 && endQueue.length > 0) {
    let startCurrent = startQueue.shift();
    let endCurrent = endQueue.shift();

    if (endVisited.has(startCurrent)) {
      console.log("Path found!");
      return;
    }

    if (startVisited.has(endCurrent)) {
      console.log("Path found!");
      return;
    }

    for (let child of startCurrent.children) {
      if (!startVisited.has(child)) {
        startVisited.add(child);
        startQueue.push(child);
      }
    }

    for (let child of endCurrent.children) {
      if (!endVisited.has(child)) {
        endVisited.add(child);
        endQueue.push(child);
      }
    }
  }

  console.log("Path not found!");
}

// Example usage
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.addChild(node2);
node2.addChild(node3);

biDirectionalSearch(node1, node3);
