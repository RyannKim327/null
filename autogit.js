const graph = {
  a: ['b', 'c'],
  b: ['a', 'd'],
  c: ['a'],
  d: ['b', 'e'],
  e: ['d', 'f'],
  f: ['e'],
};
function bidirectionalSearch(start, goal) {
  const queueForward = [start];
  const queueBackward = [goal];
  
  // Other code goes here...
}
function expandNode(node, isForward) {
  const queue = isForward ? queueForward : queueBackward;
  const adjacentNodes = graph[node];
  
  for (let i = 0; i < adjacentNodes.length; i++) {
    const adjacentNode = adjacentNodes[i];
    
    // Add adjacentNode to queue or perform other operations
  }
}

function isIntersecting() {
  for (let i = 0; i < queueForward.length; i++) {
    if (queueBackward.includes(queueForward[i])) {
      return true;
    }
  }
  
  return false;
}
function bidirectionalSearch(start, goal) {
  const queueForward = [start];
  const queueBackward = [goal];
  
  while (queueForward.length > 0 && queueBackward.length > 0) {
    if (isIntersecting()) {
      // Intersection found, perform desired operations
      return;
    }
    
    const nodeForward = queueForward.shift();
    const nodeBackward = queueBackward.shift();
    
    expandNode(nodeForward, true);
    expandNode(nodeBackward, false);
  }
  
  // Intersection not found, perform desired operations
}
