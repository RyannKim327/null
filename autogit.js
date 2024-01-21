class Node {
  constructor(state, parent, cost, heuristic) {
    this.state = state;
    this.parent = parent;
    this.cost = cost;
    this.heuristic = heuristic;
  }
}
function aStarSearch(initialState, goalState, getNeighbors, getCost, getHeuristic) {
  // Create the initial node with a cost of 0 and heuristic value
  const initialNode = new Node(initialState, null, 0, getHeuristic(initialState));

  // Create open and closed lists
  const openList = [initialNode];
  const closedList = new Set();

  while (openList.length > 0) {
    // Sort the open list by f = g + h
    openList.sort((a, b) => a.cost + a.heuristic - (b.cost + b.heuristic));

    // Pop the node with the lowest f value from the open list
    const currentNode = openList.shift();

    // Check if goal state is reached
    if (currentNode.state === goalState) {
      return getPath(currentNode); // return the path to the goal
    }

    // Add current node to the closed list
    closedList.add(JSON.stringify(currentNode.state));

    // Get all neighbors of the current node
    const neighbors = getNeighbors(currentNode.state);

    for (const neighbor of neighbors) {
      // Calculate the cost to reach the neighbor
      const neighborCost = currentNode.cost + getCost(currentNode.state, neighbor);

      // Check if the neighbor is already in the closed list
      if (closedList.has(JSON.stringify(neighbor))) {
        continue;
      }

      // Check if the neighbor is already in the open list
      const existingNode = openList.find(node => JSON.stringify(node.state) === JSON.stringify(neighbor));
      if (existingNode && neighborCost >= existingNode.cost) {
        continue;
      }

      // Create a new node for the neighbor
      const neighborNode = new Node(neighbor, currentNode, neighborCost, getHeuristic(neighbor));

      // Add the neighbor node to the open list
      openList.push(neighborNode);
    }
  }

  return null; // no path found
}
// Example utility functions for an 8-puzzle problem

function getNeighbors(state) {
  // Return all possible neighbors of the current state
}

function getCost(currentState, nextState) {
  // Return the cost to move from current state to next state
}

function getHeuristic(state) {
  // Return the estimated cost to reach the goal state from the current state
}

function getPath(node) {
  // Reconstruct the path from the goal node to the initial node
}

// Usage
const initialState = // initial state of the problem
const goalState = // goal state of the problem

const path = aStarSearch(initialState, goalState, getNeighbors, getCost, getHeuristic);

if (path) {
  console.log("Found path:", path);
} else {
  console.log("No path found.");
}
