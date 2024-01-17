class Node {
  constructor(state, parent) {
    this.state = state;
    this.parent = parent;
  }
}
function biDirectionalSearch(startState, goalState) {
  // Create initial nodes for forward and backward search
  const startNode = new Node(startState, null);
  const goalNode = new Node(goalState, null);

  // Create empty queues for forward and backward search
  const startQueue = [startNode];
  const goalQueue = [goalNode];

  // Create empty sets to track visited nodes for forward and backward search
  const startVisited = new Set();
  const goalVisited = new Set();

  // Iterate until either the forward or backward queue is empty
  while (startQueue.length > 0 && goalQueue.length > 0) {
    // Perform forward search from start state
    const startCurrentNode = startQueue.shift();
    const startCurrentState = startCurrentNode.state;

    // Check if the current state is the goal state
    if (startCurrentState === goalState || goalVisited.has(startCurrentState)) {
      return getPath(startCurrentNode, goalNode);
    }

    // Generate new states from the current state
    const startNewStates = generateNewStates(startCurrentState);

    // Add new states to the forward queue and track visited nodes
    for (const newState of startNewStates) {
      const newNode = new Node(newState, startCurrentNode);
      if (!startVisited.has(newState)) {
        startQueue.push(newNode);
        startVisited.add(newState);
      }
    }

    // Perform backward search from goal state
    const goalCurrentNode = goalQueue.shift();
    const goalCurrentState = goalCurrentNode.state;

    // Check if the current state is the start state
    if (goalCurrentState === startState || startVisited.has(goalCurrentState)) {
      return getPath(startNode, goalCurrentNode);
    }

    // Generate new states from the current state
    const goalNewStates = generateNewStates(goalCurrentState);

    // Add new states to the backward queue and track visited nodes
    for (const newState of goalNewStates) {
      const newNode = new Node(newState, goalCurrentNode);
      if (!goalVisited.has(newState)) {
        goalQueue.push(newNode);
        goalVisited.add(newState);
      }
    }
  }

  // No path found
  return null;
}
function generateNewStates(state) {
  // Return an array of new states generated from the current state
  // Implementation depends on the problem or graph representation
  // Example: return [state + 1, state - 1];
}
function getPath(startNode, goalNode) {
  const path = [];
  let currentNode = startNode;

  // Traverse from the start node to the root
  while (currentNode !== null) {
    path.unshift(currentNode.state);
    currentNode = currentNode.parent;
  }

  currentNode = goalNode.parent;

  // Traverse from the goal node's parent to the goal node
  while (currentNode !== null) {
    path.push(currentNode.state);
    currentNode = currentNode.parent;
  }

  return path;
}
