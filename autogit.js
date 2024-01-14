class Node {
  constructor(state, parent, cost) {
    this.state = state;
    this.parent = parent;
    this.cost = cost;
  }
}
function aStarSearch(startState, goalState, heuristic) {
  const openSet = [new Node(startState, null, 0)];
  const closedSet = new Set();

  while (openSet.length > 0) {
    // Find the node with the lowest cost
    let currentNode = openSet[0];
    let currentIndex = 0;
    for (let i = 1; i < openSet.length; i++) {
      if (openSet[i].cost < currentNode.cost) {
        currentNode = openSet[i];
        currentIndex = i;
      }
    }

    // Check if we reached the goal state
    if (currentNode.state === goalState) {
      let path = [];
      while (currentNode !== null) {
        path.push(currentNode.state);
        currentNode = currentNode.parent;
      }
      return path.reverse();
    }

    // Move the current node to the closed set
    openSet.splice(currentIndex, 1);
    closedSet.add(currentNode.state);

    // Generate successor nodes and add them to the open set
    const successors = generateSuccessors(currentNode.state);
    for (let successorState of successors) {
      if (closedSet.has(successorState)) {
        continue;
      }

      const cost = currentNode.cost + 1; // Assume uniform cost
      const heuristicCost = cost + heuristic(successorState, goalState);

      let alreadyInOpenSet = false;
      for (let i = 0; i < openSet.length; i++) {
        if (openSet[i].state === successorState && openSet[i].cost <= cost) {
          alreadyInOpenSet = true;
          break;
        }
      }

      if (!alreadyInOpenSet) {
        const successorNode = new Node(successorState, currentNode, cost);
        openSet.push(successorNode);
      }
    }
  }

  return []; // No path found
}
