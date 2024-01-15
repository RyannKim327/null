class Node {
  constructor(state, parent = null, g = 0, h = 0) {
    this.state = state;
    this.parent = parent;
    this.g = g;
    this.h = h;
    this.f = g + h;
  }
}
function aStarSearch(startState, goalState) {
  let openList = [];
  let closedList = new Set();

  // Create a starting node
  const startNode = new Node(startState);

  // Add the starting node to the open list
  openList.push(startNode);

  while (openList.length > 0) {
    // Find the node with the lowest f value in the open list
    let currentNode = openList[0];
    let currentIndex = 0;

    for (let i = 1; i < openList.length; i++) {
      if (openList[i].f < currentNode.f) {
        currentNode = openList[i];
        currentIndex = i;
      }
    }

    // Move the current node from the open list to the closed list
    openList.splice(currentIndex, 1);
    closedList.add(JSON.stringify(currentNode.state));

    if (JSON.stringify(currentNode.state) === JSON.stringify(goalState)) {
      // Found the goal state, retrieve the path
      let path = [];
      while (currentNode !== null) {
        path.unshift(currentNode.state);
        currentNode = currentNode.parent;
      }
      return path;
    }

    // Generate children nodes
    const children = [];

    // TODO: Implement code to generate children nodes based on the current state

    for (let i = 0; i < children.length; i++) {
      const child = children[i];

      if (closedList.has(JSON.stringify(child.state))) {
        // Child node has already been evaluated, skip it
        continue;
      }

      // Calculate the g, h, and f values for the child node
      const g = currentNode.g + 1; // Assuming each step has a cost of 1
      const h = heuristic(child);
      const f = g + h;

      // Check if the child is already in the open list and has a lower cost
      let inOpenList = false;

      for (let i = 0; i < openList.length; i++) {
        if (JSON.stringify(openList[i].state) === JSON.stringify(child.state) && g >= openList[i].g) {
          inOpenList = true;
          break;
        }
      }

      if (inOpenList) {
        continue;
      }

      // Add the child node to the open list
      openList.push(new Node(child.state, currentNode, g, h));
    }
  }

  // No path found
  return null;
}
const startState = "start";
const goalState = "goal";

const path = aStarSearch(startState, goalState);

if (path) {
  console.log("Path found:", path);
} else {
  console.log("No path found.");
}
