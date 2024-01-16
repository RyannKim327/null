function bidirectionalSearch(graph, startNode, targetNode) {
  // Create starting and target queues
  const startingQueue = [startNode];
  const targetQueue = [targetNode];

  // Initialize visited nodes
  const startingVisited = new Set();
  const targetVisited = new Set();

  // Mark start and target nodes as visited
  startingVisited.add(startNode);
  targetVisited.add(targetNode);

  while (startingQueue.length > 0 && targetQueue.length > 0) {
    // Perform forward search
    const currentNode = startingQueue.shift();
    const neighbors = graph[currentNode];

    for (let neighbor of neighbors) {
      if (!startingVisited.has(neighbor)) {
        startingVisited.add(neighbor);
        startingQueue.push(neighbor);

        // Check for meeting point
        if (targetVisited.has(neighbor)) {
          return "Meeting point found!";
        }
      }
    }

    // Perform backward search
    const targetNode = targetQueue.shift();
    const targetNeighbors = graph[targetNode];

    for (let neighbor of targetNeighbors) {
      if (!targetVisited.has(neighbor)) {
        targetVisited.add(neighbor);
        targetQueue.push(neighbor);

        // Check for meeting point
        if (startingVisited.has(neighbor)) {
          return "Meeting point found!";
        }
      }
    }
  }

  return "No meeting point found!";
}

// Example usage
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: [],
  F: []
};

console.log(bidirectionalSearch(graph, 'A', 'F'));
