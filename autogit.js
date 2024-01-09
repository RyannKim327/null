class Node {
  constructor(value) {
    this.value = value;
    this.adjacentNodes = [];
  }
}

function biDirectionalSearch(start, target) {
  const forwardQueue = [];
  const backwardQueue = [];
  const forwardVisited = new Set();
  const backwardVisited = new Set();
  const parentsForward = new Map();
  const parentsBackward = new Map();

  forwardQueue.push(start);
  backwardQueue.push(target);
  forwardVisited.add(start);
  backwardVisited.add(target);

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    const forwardNode = forwardQueue.shift();
    if (backwardVisited.has(forwardNode)) {
      // Path found!
      const path = getPath(forwardNode, parentsForward, parentsBackward);
      return path;
    }

    for (const adjacentNode of forwardNode.adjacentNodes) {
      if (!forwardVisited.has(adjacentNode)) {
        forwardQueue.push(adjacentNode);
        forwardVisited.add(adjacentNode);
        parentsForward.set(adjacentNode, forwardNode);
      }
    }

    const backwardNode = backwardQueue.shift();
    if (forwardVisited.has(backwardNode)) {
      // Path found!
      const path = getPath(backwardNode, parentsForward, parentsBackward);
      return path;
    }

    for (const adjacentNode of backwardNode.adjacentNodes) {
      if (!backwardVisited.has(adjacentNode)) {
        backwardQueue.push(adjacentNode);
        backwardVisited.add(adjacentNode);
        parentsBackward.set(adjacentNode, backwardNode);
      }
    }
  }

  // No path found
  return null;
}

function getPath(node, parentsForward, parentsBackward) {
  const path = [];
  
  let current = node;
  while (current) {
    path.unshift(current);
    current = parentsForward.get(current);
  }

  current = parentsBackward.get(node);
  while (current) {
    path.push(current);
    current = parentsBackward.get(current);
  }

  return path;
}
