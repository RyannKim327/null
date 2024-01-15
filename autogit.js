function biDirectionalSearch(startNode, endNode) {
  let startQueue = [startNode];
  let endQueue = [endNode];

  let visitedStart = new Set([startNode]);
  let visitedEnd = new Set([endNode]);

  let startPrev = new Map();
  let endPrev = new Map();

  while (startQueue.length > 0 && endQueue.length > 0) {
    let currentStartNode = startQueue.shift();
    let currentEndNode = endQueue.shift();

    if (visitedEnd.has(currentStartNode)) {
      return getPath(startPrev, endPrev, currentStartNode);
    }

    if (visitedStart.has(currentEndNode)) {
      return getPath(startPrev, endPrev, currentEndNode);
    }

    processNeighbors(currentStartNode, startQueue, visitedStart, startPrev);
    processNeighbors(currentEndNode, endQueue, visitedEnd, endPrev);
  }

  return null; // No path found
}

function processNeighbors(node, queue, visited, prev) {
  // Process neighbors of the node and add to the queue
  // Mark them as visited and set their previous node in prev
}

function getPath(startPrev, endPrev, intersectionNode) {
  // Construct the path by traversing startPrev and endPrev maps
  // from intersectionNode to startNode and endNode respectively
  // Return the concatenated path
}
