class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}
class Node {
  // ...

  addNeighbor(node) {
    this.neighbors.push(node);
    node.neighbors.push(this);
  }
}
function bidirectionalSearch(startNode, endNode) {
  
}
function bidirectionalSearch(startNode, endNode) {
  const visitedFromStart = new Set();
  const visitedFromEnd = new Set();
}
function bidirectionalSearch(startNode, endNode) {
  const visitedFromStart = new Set();
  const visitedFromEnd = new Set();
  const queueFromStart = [startNode];
  const queueFromEnd = [endNode];
}
function performSearch(queue, visited, oppositeVisited) {
  const node = queue.shift();
  if (oppositeVisited.has(node))
    return node;

  visited.add(node);
  for (const neighbor of node.neighbors) {
    if (!visited.has(neighbor))
      queue.push(neighbor);
  }
}
function bidirectionalSearch(startNode, endNode) {
  const visitedFromStart = new Set();
  const visitedFromEnd = new Set();
  const queueFromStart = [startNode];
  const queueFromEnd = [endNode];

  while (queueFromStart.length > 0 && queueFromEnd.length > 0) {
    const nodeFromStart = performSearch(queueFromStart, visitedFromStart, visitedFromEnd);
    if (nodeFromStart)
      return reconstructPath(nodeFromStart, startNode, endNode);

    const nodeFromEnd = performSearch(queueFromEnd, visitedFromEnd, visitedFromStart);
    if (nodeFromEnd)
      return reconstructPath(nodeFromEnd, startNode, endNode);
  }

  return null;
}

function reconstructPath(node, startNode, endNode) {
  const path = [node.value];
  let curr = node;

  while (curr !== startNode) {
    for (const neighbor of curr.neighbors) {
      if (curr === endNode || visitedFromStart.has(neighbor) && neighbor.neighbors.includes(curr)) {
        path.unshift(neighbor.value);
        curr = neighbor;
        break;
      }
    }
  }

  curr = node;
  while (curr !== endNode) {
    for (const neighbor of curr.neighbors) {
      if (curr === startNode || visitedFromEnd.has(neighbor) && neighbor.neighbors.includes(curr)) {
        path.push(neighbor.value);
        curr = neighbor;
        break;
      }
    }
  }

  return path;
}
