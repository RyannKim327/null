function bidirectionalSearch(graph, startNode, goalNode) {
  const forwardQueue = [startNode];
  const backwardQueue = [goalNode];
  
  const forwardVisited = new Set();
  const backwardVisited = new Set();
  
  const forwardParent = {};
  const backwardParent = {};
  
  forwardVisited.add(startNode);
  backwardVisited.add(goalNode);
  forwardParent[startNode] = null;
  backwardParent[goalNode] = null;
  
  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    const meetingNode = exploreNeighbors(
      graph,
      forwardQueue,
      backwardQueue,
      forwardVisited,
      backwardVisited,
      forwardParent,
      backwardParent
    );
    
    if (meetingNode !== null) {
      // Path found!
      const path = getPath(meetingNode, forwardParent, backwardParent);
      return path;
    }
  }
  
  // No path found
  return null;
}

function exploreNeighbors(
  graph,
  forwardQueue,
  backwardQueue,
  forwardVisited,
  backwardVisited,
  forwardParent,
  backwardParent
) {
  const forwardNode = forwardQueue.shift();
  const backwardNode = backwardQueue.shift();
  
  const forwardNeighbors = graph[forwardNode];
  const backwardNeighbors = graph[backwardNode];
  
  for (const neighbor of forwardNeighbors) {
    if (!forwardVisited.has(neighbor)) {
      forwardQueue.push(neighbor);
      forwardVisited.add(neighbor);
      forwardParent[neighbor] = forwardNode;
    }
    
    if (backwardVisited.has(neighbor)) {
      // Meeting point found!
      return neighbor;
    }
  }
  
  for (const neighbor of backwardNeighbors) {
    if (!backwardVisited.has(neighbor)) {
      backwardQueue.push(neighbor);
      backwardVisited.add(neighbor);
      backwardParent[neighbor] = backwardNode;
    }
    
    if (forwardVisited.has(neighbor)) {
      // Meeting point found!
      return neighbor;
    }
  }
  
  return null;
}

function getPath(meetingNode, forwardParent, backwardParent) {
  const path = [];
  
  // Traverse from the start node to the meeting point
  let node = meetingNode;
  while (node !== null) {
    path.push(node);
    node = forwardParent[node];
  }
  
  // Traverse from the goal node to the meeting point
  node = backwardParent[meetingNode];
  while (node !== null) {
    path.unshift(node);
    node = backwardParent[node];
  }
  
  return path;
}
