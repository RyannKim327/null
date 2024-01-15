let startNode = { state: startState, parent: null };
let goalNode = { state: goalState, parent: null };
queueStart.push(startNode);
queueGoal.push(goalNode);
while (queueStart.length > 0 && queueGoal.length > 0) {
  // Explore next state from the start direction
  let currentState = queueStart.shift();
  let neighbors = getNeighbors(currentState.state);

  for (let neighbor of neighbors) {
    if (!visited.hasOwnProperty(neighbor)) {
      let newNode = { state: neighbor, parent: currentState };
      queueStart.push(newNode);
      visited[neighbor] = newNode;

      // Check if this state has already been visited from the goal direction
      if (visited.hasOwnProperty(neighbor)) {
        return "Path found!"; // or return the path here
      }
    }
  }

  // Explore next state from the goal direction
  currentState = queueGoal.shift();
  neighbors = getNeighbors(currentState.state);

  for (let neighbor of neighbors) {
    if (!visited.hasOwnProperty(neighbor)) {
      let newNode = { state: neighbor, parent: currentState };
      queueGoal.push(newNode);
      visited[neighbor] = newNode;

      // Check if this state has already been visited from the start direction
      if (visited.hasOwnProperty(neighbor)) {
        return "Path found!"; // or return the path here
      }
    }
  }
}

// If there is no path connecting the start and goal states
return "No path found!";
