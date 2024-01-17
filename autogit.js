function bidirectionalSearch(graph, startNode, endNode) {
  // Initialize forward and backward queues
  const forwardQueue = [{ node: startNode, parent: null }];
  const backwardQueue = [{ node: endNode, parent: null }];
  
  // Track visited nodes from both directions
  const forwardVisited = new Set([startNode]);
  const backwardVisited = new Set([endNode]);

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Expand nodes in the forward direction
    const forwardNode = forwardQueue.shift();
    const forwardNeighbors = graph[forwardNode.node];

    for (let neighbor of forwardNeighbors) {
      if (!forwardVisited.has(neighbor)) {
        forwardVisited.add(neighbor);
        forwardQueue.push({ node: neighbor, parent: forwardNode });
      }

      if (backwardVisited.has(neighbor)) {
        // Found a meeting point, reconstruct the path
        return getPath(forwardNode, neighbor, backwardQueue, false);
      }
    }

    // Expand nodes in the backward direction
    const backwardNode = backwardQueue.shift();
    const backwardNeighbors = graph[backwardNode.node];

    for (let neighbor of backwardNeighbors) {
      if (!backwardVisited.has(neighbor)) {
        backwardVisited.add(neighbor);
        backwardQueue.push({ node: neighbor, parent: backwardNode });
      }

      if (forwardVisited.has(neighbor)) {
        // Found a meeting point, reconstruct the path
        return getPath(backwardNode, neighbor, forwardQueue, true);
      }
    }
  }

  // No path found
  return null;
}

function getPath(nodeA, nodeB, queue, reverse) {
  const path = [];

  let curr = nodeA;
  while (curr !== null) {
    path.push(curr.node);
    curr = curr.parent;
  }

  if (!reverse) {
    path.reverse();
    curr = nodeB;
  } else {
    curr = nodeA;
  }

  while (curr !== null) {
    path.push(curr.node);
    curr = curr.parent;
  }

  return path;
}

// Define your graph as an adjacency list
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E", "G"],
  G: ["F"],
};

// Perform bidirectional search
const startNode = "A";
const endNode = "G";
const path = bidirectionalSearch(graph, startNode, endNode);

console.log("Path:", path);
