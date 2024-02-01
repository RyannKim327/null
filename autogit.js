function biDirectionalSearch(graph, startState, goalState) {
  // Create queues for nodes to visit from the start and goal states
  const startQueue = [startState];
  const goalQueue = [goalState];

  // Create sets to track visited nodes from the start and goal states
  const startVisited = new Set();
  const goalVisited = new Set();

  while (startQueue.length > 0 && goalQueue.length > 0) {
    // Search from the start state
    const startNode = startQueue.shift();
    startVisited.add(startNode);

    // Check if the node is also visited from the goal state
    if (goalVisited.has(startNode)) {
      return "Path found"; // or return the path
    }

    // Explore neighbors of the start state
    for (let neighbor of graph[startNode]) {
      if (!startVisited.has(neighbor)) {
        startQueue.push(neighbor);
        startVisited.add(neighbor);
      }
    }

    // Search from the goal state
    const goalNode = goalQueue.shift();
    goalVisited.add(goalNode);

    // Check if the node is also visited from the start state
    if (startVisited.has(goalNode)) {
      return "Path found"; // or return the path
    }

    // Explore neighbors of the goal state
    for (let neighbor of graph[goalNode]) {
      if (!goalVisited.has(neighbor)) {
        goalQueue.push(neighbor);
        goalVisited.add(neighbor);
      }
    }
  }

  return "Path not found";
}
