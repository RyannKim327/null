function bidirectionalSearch(graph, start, goal) {
  // Forward search variables
  let visitedForward = new Set();
  let queueForward = [];
  let parentsForward = new Map();

  // Backward search variables
  let visitedBackward = new Set();
  let queueBackward = [];
  let parentsBackward = new Map();

  // Initialize both search directions
  queueForward.push(start);
  visitedForward.add(start);
  parentsForward.set(start, null);

  queueBackward.push(goal);
  visitedBackward.add(goal);
  parentsBackward.set(goal, null);

  // Bidirectional search algorithm
  while (queueForward.length > 0 && queueBackward.length > 0) {
    // Extend forward search
    const currentForward = queueForward.shift();
    const neighborsForward = graph[currentForward];

    for (let neighbor of neighborsForward) {
      if (!visitedForward.has(neighbor)) {
        visitedForward.add(neighbor);
        parentsForward.set(neighbor, currentForward);
        queueForward.push(neighbor);

        // Check for meeting nodes
        if (visitedBackward.has(neighbor)) {
          return reconstructPath(neighbor, parentsForward, parentsBackward);
        }
      }
    }

    // Extend backward search
    const currentBackward = queueBackward.shift();
    const neighborsBackward = graph[currentBackward];

    for (let neighbor of neighborsBackward) {
      if (!visitedBackward.has(neighbor)) {
        visitedBackward.add(neighbor);
        parentsBackward.set(neighbor, currentBackward);
        queueBackward.push(neighbor);

        // Check for meeting nodes
        if (visitedForward.has(neighbor)) {
          return reconstructPath(neighbor, parentsForward, parentsBackward);
        }
      }
    }
  }

  // No path found
  return null;
}

function reconstructPath(meetingNode, parentsForward, parentsBackward) {
  let path = [];
  let currentNode = meetingNode;

  // Reconstruct path from start to meeting node
  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = parentsForward.get(currentNode);
  }

  currentNode = parentsBackward.get(meetingNode);

  // Reconstruct path from meeting node to goal
  while (currentNode !== null) {
    path.push(currentNode);
    currentNode = parentsBackward.get(currentNode);
  }

  return path;
}
