function biDirectionalSearch(initialState, goalState) {
  // Create forward and backward queues
  const forwardQueue = [initialState];
  const backwardQueue = [goalState];

  // Initialize visited sets and parent dictionaries
  const forwardVisited = new Set();
  const backwardVisited = new Set();
  const forwardParent = {};
  const backwardParent = {};

  // Start the search loop
  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    // Forward search
    const forwardState = forwardQueue.shift();
    forwardVisited.add(forwardState);

    // Check for a match in backward search
    if (backwardVisited.has(forwardState)) {
      // Path found
      return getPath(forwardParent, backwardParent, forwardState);
    }

    // Generate next states and update parent dictionary
    const nextStates = generateNextStates(forwardState);
    for (const state of nextStates) {
      if (!forwardVisited.has(state)) {
        forwardQueue.push(state);
        forwardParent[state] = forwardState;
      }
    }

    // Backward search
    const backwardState = backwardQueue.shift();
    backwardVisited.add(backwardState);

    // Check for a match in forward search
    if (forwardVisited.has(backwardState)) {
      // Path found
      return getPath(forwardParent, backwardParent, backwardState);
    }

    // Generate next states and update parent dictionary
    const prevStates = generatePrevStates(backwardState);
    for (const state of prevStates) {
      if (!backwardVisited.has(state)) {
        backwardQueue.push(state);
        backwardParent[state] = backwardState;
      }
    }
  }

  // No path found
  return null;
}

function getPath(forwardParent, backwardParent, state) {
  const path = [];
  let currentState = state;

  // Reconstruct the path from the initial state to the goal state
  while (currentState) {
    path.push(currentState);
    currentState = forwardParent[currentState];
  }

  // Reconstruct the path from the goal state to the initial state
  currentState = backwardParent[state];
  while (currentState) {
    path.unshift(currentState);
    currentState = backwardParent[currentState];
  }

  return path;
}

// Helper function to generate next states
function generateNextStates(state) {
  // Implement your logic to generate the next states based on the current state
}

// Helper function to generate previous states for backward search
function generatePrevStates(state) {
  // Implement your logic to generate the previous states based on the current state
}
