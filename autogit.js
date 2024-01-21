function AStarSearch(startState, goalState) {
  // Initialize the open and closed lists
  const openList = [];
  const closedList = new Set();

  // Create the start node and add it to the open list
  const startNode = new Node(startState, null, null, 0, heuristic(startState, goalState));
  openList.push(startNode);

  // A* search algorithm
  while (openList.length > 0) {
    openList.sort((a, b) => a.score - b.score); // Sort the open list based on the score

    // Get the node with the lowest score
    const currentNode = openList.shift();

    // Check if the goal state is reached
    if (currentNode.state === goalState) {
      // Construct and return the path
      const path = [];
      let node = currentNode;
      while (node !== null) {
        path.unshift(node.state);
        node = node.parent;
      }
      return path;
    }

    // Add the current node to the closed list
    closedList.add(currentNode.state);

    // Generate successor nodes
    const successors = generateSuccessors(currentNode.state);

    // Iterate over each successor
    for (const successor of successors) {
      const action = successor.action;
      const nextState = successor.state;
      const cost = currentNode.cost + 1; // Assuming each step has a cost of 1

      // Check if the successor is already in the closed list
      if (closedList.has(nextState)) {
        continue;
      }

      // Calculate the heuristic and score for the successor node
      const heuristicValue = heuristic(nextState, goalState);
      const score = cost + heuristicValue;

      // Find the node with the same state in the open list (if any)
      const existingNode = openList.find(node => node.state === nextState);

      if (existingNode && score < existingNode.score) {
        // Update the existing node with the new values
        existingNode.parent = currentNode;
        existingNode.action = action;
        existingNode.cost = cost;
        existingNode.score = score;
      } else if (!existingNode) {
        // Create a new node and add it to the open list
        const newNode = new Node(nextState, currentNode, action, cost, heuristicValue);
        openList.push(newNode);
      }
    }
  }

  // No path found
  return null;
}
function heuristic(state, goalState) {
  const [x1, y1] = state;
  const [x2, y2] = goalState;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}
function generateSuccessors(state) {
  const [x, y] = state;
  const successors = [];

  // Check if moving up is possible
  if (y > 0) {
    successors.push({ state: [x, y - 1], action: 'Up' });
  }

  // Check if moving down is possible
  if (y < maxY) {
    successors.push({ state: [x, y + 1], action: 'Down' });
  }

  // Check if moving left is possible
  if (x > 0) {
    successors.push({ state: [x - 1, y], action: 'Left' });
  }

  // Check if moving right is possible
  if (x < maxX) {
    successors.push({ state: [x + 1, y], action: 'Right' });
  }

  return successors;
}
