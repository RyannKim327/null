function biDirectionalSearch(startNode, endNode) {
  let startSet = new Set();
  let endSet = new Set();
  let startVisited = {};
  let endVisited = {};
  let startQueue = [];
  let endQueue = [];
  let startPrevious = {};
  let endPrevious = {};

  startSet.add(startNode);
  endSet.add(endNode);

  while (startSet.size > 0 && endSet.size > 0) {
    const currentStartNode = startQueue.shift();
    const currentEndNode = endQueue.shift();

    if (endVisited[currentStartNode]) {
      return getPath(currentStartNode, startPrevious, endPrevious);
    }

    if (startVisited[currentEndNode]) {
      return getPath(currentEndNode, startPrevious, endPrevious);
    }

    startVisited[currentStartNode] = true;
    endVisited[currentEndNode] = true;

    for (const neighbor of currentStartNode.neighbors) {
      if (!startVisited[neighbor]) {
        startSet.add(neighbor);
        startQueue.push(neighbor);
        startVisited[neighbor] = true;
        startPrevious[neighbor] = currentStartNode;
      }
    }

    for (const neighbor of currentEndNode.neighbors) {
      if (!endVisited[neighbor]) {
        endSet.add(neighbor);
        endQueue.push(neighbor);
        endVisited[neighbor] = true;
        endPrevious[neighbor] = currentEndNode;
      }
    }
  }

  return null; // No path found

  function getPath(meetingNode, startPrevious, endPrevious) {
    let path = [];
    let node = meetingNode;

    while (node) {
      path.push(node);
      node = startPrevious[node];
    }

    path = path.reverse();

    node = endPrevious[meetingNode].next;
    while (node) {
      path.push(node);
      node = endPrevious[node];
    }

    return path;
  }
}

// Usage example
const nodeA = { name: 'A', neighbors: [] };
const nodeB = { name: 'B', neighbors: [] };
const nodeC = { name: 'C', neighbors: [] };

nodeA.neighbors.push(nodeB);
nodeB.neighbors.push(nodeA, nodeC);
nodeC.neighbors.push(nodeB);

const path = biDirectionalSearch(nodeA, nodeC);
console.log(path); // Output: [nodeA, nodeB, nodeC]
